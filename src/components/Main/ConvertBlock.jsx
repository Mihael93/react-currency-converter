import { useState } from 'react';
import CurrencyInput from './input/CurrencyInput';

function ConvertBlock(props) {
   const exchangeRates = props.data;

   // state
   const [inputFirst, setInputFirst] = useState('');
   const [inputSecond, setInputSecond] = useState('');
   const [selectFirst, setSelectFirst] = useState('USD');
   const [selectSecond, setSelectSecond] = useState('GBP');


   // conversion 'first'
   function currencyConvertionFirst(value) {
      let sourceCurrencyName = selectFirst;
      let ratesBasedOnSource = exchangeRates.find(obj => obj.base === sourceCurrencyName);
      let expectedRate = ratesBasedOnSource.rates[selectSecond].toFixed(2);
      let result = ((value) * expectedRate).toFixed(2);
      return result;
   }

   // conversion 'second'
   function currencyConvertionSecond(value) {
      let sourceCurrencyName = selectSecond;
      let ratesBasedOnSource = exchangeRates.find(obj => obj.base === sourceCurrencyName);
      let expectedRate = ratesBasedOnSource.rates[selectFirst].toFixed(2);
      let result = ((value) * expectedRate).toFixed(2);
      return result;
   }

   function tryConvert(value, convert) {
      const input = value;
      const output = convert(input);
      return output;
   }

   const handleFirstFieldChange = (value) => {
      const targetAmount = tryConvert(value, currencyConvertionFirst);

      setInputFirst(value);
      setInputSecond(targetAmount);
   }

   const handleSecondFieldChange = (value) => {
      const baseAmount = tryConvert(value, currencyConvertionSecond);

      setInputFirst(baseAmount);
      setInputSecond(value);
   }
   //Problem is definitely HERE 
   const handleFirstSelectChange = (value) => {
      const inputAmount = inputSecond;
      const targetAmount = tryConvert(inputAmount, currencyConvertionSecond);

      setInputFirst(targetAmount);
      setSelectFirst(value);
   }
   //Problem is definitely HERE 
   const handleSecondSelectChange = (value) => {
      const inputAmount = inputFirst;
      const baseAmount = tryConvert(inputAmount, currencyConvertionFirst);

      setInputSecond(baseAmount);
      setSelectSecond(value);
   }

   return (
      <div className="container">
         <h4 className="text-center my-2">Converter</h4>
         <div className="row justify-content-between p-2 flex-wrap">
            <div className="col-5 d-flex align-items-center">
               <CurrencyInput
                  id="inputGroupSelect01"
                  amount={inputFirst}
                  currency={selectFirst}
                  onAmountChange={(e) => handleFirstFieldChange(e)}
                  onCurrencyChange={(e) => handleFirstSelectChange(e)}
                  scaleNames={props.scaleNames}
               />
            </div>
            <img src="https://www.svgrepo.com/show/339792/arrows-horizontal.svg" alt="convert-flow" className="my-3" />
            <div className="col-5 d-flex align-items-center">
               <CurrencyInput
                  amount={inputSecond}
                  currency={selectSecond}
                  onAmountChange={(e) => handleSecondFieldChange(e)}
                  onCurrencyChange={(e) => handleSecondSelectChange(e)}
                  scaleNames={props.scaleNames}
               />
            </div>
         </div>
      </div>
   )
}

export default ConvertBlock;