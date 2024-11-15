import { Dispatch, SetStateAction } from "react";

interface DataProps{
    [key: string]: number;
  }
  

interface CurrencyProps{
    data: DataProps
    label: 'from' | 'to',
    setCurrency: Dispatch<SetStateAction<string>>,
    currency: string,
    setAmount: Dispatch<SetStateAction<number>>,
    amount: number,
}

const CurrencyCard: React.FC<CurrencyProps> = ({
  data,
  label,
  setCurrency,
  currency,
  setAmount,
  amount,
}) => {
  const handleAmount = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
  };

  const handleExcep = () => {
    alert("Please Change only the Input Feild");
  };

  const labelCap = label[0].toUpperCase() + label.slice(1)

  return (
    <div className="flex align-center justify-center border w-2/5 mx-auto px-4 py-2 pb-4 rounded-lg border-lime-400 flex justify-between">
        <div className="flex flex-col gap-2">
        <h4 className="text-lime-700 text-sm">{labelCap}</h4>
      <input
        type="number"
        name=""
        id=""
        onChange={(event) => {
          if (label === "from") {
            handleAmount(event);
          } else {
            handleExcep();
          }
        }}
        style={{
            WebkitAppearance: "none",
        }}
        className="bg-slate-800 text-lime-400 text-lg h-12 px-2 w-full"
        value={amount}
      />
        </div>
        <div className="flex flex-col gap-2">
        <h4 className="text-lime-700 text-sm">Currency Type</h4>
      <select
        value={currency}
        name=""
        id=""
        onChange={(e) => setCurrency(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block p-2.5 dark:bg-gray-700 dark:border-lime-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400 h-12 my-auto w-full"
        style={{
          WebkitAppearance: "none",
        }}
      >
        {Object.keys(data).map((key) => {
          return (
            <option value={key} key={key}>
              {key}
            </option>
          );
        })}
      </select>
        </div>
    </div>
  );
};

export default CurrencyCard;
