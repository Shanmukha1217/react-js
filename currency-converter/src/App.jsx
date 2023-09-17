import { useState } from "react";
import InputField from "./components/InputField";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("gbp");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(Math.round(amount * currencyInfo[to], 3));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://www.cadran.nl/wp-content/uploads/2021/07/forex-foreign-exchange-trade-software.jpg')",
      }}
    >
      <div className="w-full md:w-96 bg-white rounded-3xl flex flex-col items-center justify-around p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Currency converter
        </h1>

        <InputField
          label="From"
          currencyOptions={options}
          selectCurrency={from}
          onAmountChange={setAmount}
          amount={amount}
          onCurrencyChange={setFrom}
        />
        <button
          className="w-full md:w-auto px-4 py-2 rounded-lg bg-blue-500 text-yellow-400 font-extrabold m-2 "
          onClick={swap}
        >
          SWAP
        </button>
        <InputField
          label="To"
          currencyOptions={options}
          selectCurrency={to}
          amount={convertedAmount}
          onCurrencyChange={setTo}
          amountDisable
        />
        <button
          className="w-full md:w-auto px-4 py-2 rounded-lg bg-blue-500 text-yellow-400 font-bold mt-2"
          onClick={convert}
        >
          CONVERT {from.toUpperCase()} TO {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
