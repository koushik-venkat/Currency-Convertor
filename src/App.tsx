import { useEffect, useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import CurrencyCard from "./components/CurrencyCard";

function App() {
  const [base, setBase] = useState("usd");
  const [target, setTarget] = useState("inr");
  const [baseAmount, setBaseAmount] = useState(1);
  // const [targetAmount, setTargetAmount] = useState(null)
  const data = useCurrencyInfo(base);

  let targetAmount = baseAmount * data[target];
  targetAmount = targetAmount.toFixed(2);

  console.log(data);
  const handleAmount = (e) => {
    const value = e.target.value;
    setBaseAmount(value);
  };

  const handleSwap = () => {
    const temp = base;
    setBase(target);
    setTarget(temp);
  };
  return (
    <div className="bg-slate-800">
    <div className="text-lime-400 font-bold font-mono text-3xl text-center pt-64">
      Currency Converter
    </div>
    <div
      className = "flex flex-col w-full h-screen pt-8 gap-6"
    >
      <CurrencyCard
        data={data}
        label="from"
        setCurrency={setBase}
        currency={base}
        setAmount={setBaseAmount}
        amount={baseAmount}
      />
      <button className="bg-lime-400 w-16 mx-auto h-12 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-md border border-black" onClick={handleSwap}>Swap</button>
      <CurrencyCard
        data={data}
        label="to"
        setCurrency={setTarget}
        currency={target}
        amount={targetAmount}
      />
    </div>
    </div>
  );
}

export default App;
