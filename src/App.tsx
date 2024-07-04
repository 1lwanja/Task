import React, { useState, useMemo } from "react";

import Table from "./pages/Table";
import Pagination from "./pages/Pagination";
import Spinner from "./UI/Spinner";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import useApiData from "./hooks/useApiData";

interface Values {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface TimeSeriesData {
  [date: string]: Values;
}

interface MetaData {
  [key: string]: string;
}

export interface ApiData {
  "Time Series (5min)": TimeSeriesData;
  "Meta Data": MetaData;
}

const App: React.FC = () => {
  const apiData = useApiData();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage: number = 10;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const paginatedData = useMemo(() => {
    if (!apiData) return null;
    const timeSeriesData = apiData["Time Series (5min)"];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Object.entries(timeSeriesData).slice(startIndex, endIndex);
  }, [apiData, currentPage]);

  return (
    <>
      <Navbar />

      {apiData ? (
        <div>
          <Table
            metaData={apiData["Meta Data"]}
            timeSeriesData={paginatedData}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              Object.keys(apiData["Time Series (5min)"]).length / itemsPerPage
            )}
            onPageChange={paginate}
          />
        </div>
      ) : (
        <Spinner />
      )}
      <Footer />
    </>
  );
};

export default App;
