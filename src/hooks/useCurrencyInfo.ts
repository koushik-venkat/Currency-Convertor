import React, { useEffect, useState } from "react";

const useCurrencyInfo = (baseCurrency) => {
  const [data, setData] = useState({});
  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(res[baseCurrency]));
  }, [baseCurrency]);
  return data;
};

export default useCurrencyInfo;
