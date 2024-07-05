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
  "Error Message"?: string;
}
