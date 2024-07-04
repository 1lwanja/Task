import React from "react";

interface Values {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface MetaData {
  [key: string]: string;
}

interface TableProps {
  metaData: MetaData;
  timeSeriesData: [string, Values][] | null;
}

const Table: React.FC<TableProps> = ({ metaData, timeSeriesData }) => {
  return (
    <div className="bg-stone-600 ">
      <div className="w-[100%] md:w-[60%] mx-auto mb-[5rem] mt-0 ">
        <p className="font-extrabold text-stone-50 text-[20px] text-center">
          Meta Data
        </p>
        <table className="table-auto w-full bg-slate-700">
          <thead>
            <tr className="bg-stone-300 text-gray-700 uppercase text-xs leading-normal">
              <th className="py-2 px-4">Information</th>
              <th className="py-2 px-4">Value</th>
            </tr>
          </thead>
          <tbody className="text-stone-200 text-sm font-light">
            {metaData &&
              Object.entries(metaData).map(([key, value]) => (
                <tr
                  key={key}
                  className="border-b border-gray-200 hover:bg-slate-600"
                >
                  <td className="py-2 px-4 font-medium">{key}</td>
                  <td className="py-2 px-4">{value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <div className="max-w-[90%] mx-auto ">
          <p className="font-extrabold text-stone-50 text-[20px] text-center">
            Time Series
          </p>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-stone-300 text-stone-200 uppercase text-xs leading-normal">
              <tr>
                <th className="px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider ">
                  Date
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Open
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider">
                  High
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Low
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Close
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-800 uppercase tracking-wider">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {timeSeriesData &&
                timeSeriesData.map(([date, values]) => (
                  <tr
                    key={date}
                    className="border-b text-center border-gray-200 hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {values["1. open"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {values["2. high"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {values["3. low"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {values["4. close"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {values["5. volume"]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
