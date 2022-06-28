import { useState, useEffect } from "react";
import { getMarkets } from "../services/api";
import Table from "../components/table/table";
import CustomPagination from "../components/pagination/pagination";
import Wait from "../components/wait/wait";

const HomePage = () => {
  const [coinData, setCoinData] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  const tableHeaderData = [
    {
      objKey: "image",
      label: "Image",
      type: "img",
    },
    {
      objKey: "name",
      label: "Name",
      type: "string",
    },
    {
      objKey: "symbol",
      label: "Symbol",
      type: "string",
    },
    {
      objKey: "current_price",
      label: "Current Price",
      type: "string",
    },
    {
      objKey: "high_24h",
      label: "High 24 hour Price",
      type: "string",
    },
    {
      objKey: "low_24h",
      label: "Low 24 hour Price",
      type: "string",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getMarkets(pageNo, 10);
      setCoinData(res);
      setLoading(false);
    };
    getData();
  }, [pageNo]);

  const handleNextPage = () => {
    setPageNo((state) => state + 1);
  };

  const handlePrevPage = () => {
    setPageNo((state) => {
      if (state > 1) {
        return state - 1;
      }
      return state;
    });
  };

  return (
    <div className="m-5">
      {coinData && (
        <Table
          header={tableHeaderData}
          body={coinData}
          className="home-table"
        />
      )}
      <div className="d-flex justify-content-center">
        <CustomPagination
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          currentPageNo={pageNo}
        />
      </div>
     {loading && <Wait fixed/>}
    </div>
  );
};

export default HomePage;
