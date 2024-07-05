import { ApiData } from "@/types";
import { useMemo } from "react";

const itemsPerPage: number = 10;

const usePaginate = (currentPage: number, data: ApiData | null) => {
  const paginatedData = useMemo(() => {
    if (!data) return null;

    const timeSeriesData = data["Time Series (5min)"];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return Object.entries(timeSeriesData).slice(startIndex, endIndex);
  }, [data, currentPage]);

  return { itemsPerPage, paginatedData };
};

export default usePaginate;
