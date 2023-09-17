/* eslint-disable react/prop-types */
const InputField = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center gap-6 items-center p-4 border border-solid border-black rounded-md bg-transparent">
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <label>{label}</label> <br />
        <input
          className="w-full sm:w-40 rounded"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      <div className="w-full sm:w-1/2">
        <label className="mb-1">Currency Type</label>
        <br />
        <select
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputField;
