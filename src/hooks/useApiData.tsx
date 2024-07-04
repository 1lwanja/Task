import axios from "axios";
import { useState, useEffect } from "react";

import { ApiData } from "@/App";

export default function useApiData() {
  const [apiData, setApiData] = useState<ApiData | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const API_KEY1 = "demo";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY1}`
        );
        setApiData(response.data);
      } catch (error) {
        setError("Error fetching data:");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error, loading]);

  return apiData;
}
