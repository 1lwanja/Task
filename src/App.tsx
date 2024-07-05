import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import useApiData from "./hooks/useApiData";
import Pagination from "./pages/Pagination";
import Table from "./pages/Table";
import Spinner from "./UI/Spinner";
import usePaginate from "./hooks/usePaginate";

const App: React.FC = () => {
  const { apiData, loading, error } = useApiData();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { paginatedData, itemsPerPage } = usePaginate(currentPage, apiData);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {error && <p>{error}</p>}
      {!loading && apiData ? (
        <main className="flex-grow">
          <Table
            metaData={apiData["Meta Data"]}
            timeSeriesData={paginatedData}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              Object.keys(apiData["Time Series (5min)"]).length / itemsPerPage
            )}
            onPageChange={setCurrentPage}
          />
        </main>
      ) : (
        <Spinner />
      )}
      <Footer />
    </div>
  );
};

export default App;
