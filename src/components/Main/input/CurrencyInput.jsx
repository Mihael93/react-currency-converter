const CurrencyInput = ({ amount, currency, onAmountChange, onCurrencyChange, scaleNames }) => {

   const handleAmountChange = (e) => {
      onAmountChange(e.target.value);
   };

   const handleCurrencyChange = (e) => {
      onCurrencyChange(e.target.value);
   };

   return (
      <div className="input-group">
         <input className="form-control"
            type="number"
            value={amount}
            onChange={handleAmountChange}
         />
         <div className="input-group-append">
            <select className="custom-select"
               value={currency}
               onChange={handleCurrencyChange}
            >
               {scaleNames.map(item => {
                  return (
                     <option id={item.id} value={item.base}>{item.base}</option>
                  )
               })}
            </select>
         </div>
      </div>
   )
}

export default CurrencyInput;