import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { ApiData } from "@/types";

export default function useApiData() {
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY1 = "demo";

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ApiData>(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY1}`,
          { signal: controller.signal }
        );

        const error = response.data["Error Message"];
        if (error) throw new Error(error);

        setApiData(response.data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError(
          error instanceof Error ? error.message : "Error fetching data"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => controller.abort();
  }, []);

  return { apiData, loading, error };
}
