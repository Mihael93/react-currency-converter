const Header = (props) => {
   const baseExchangeRatesName = 'USD';
   const exchangeRatesDataUSD = props.data.find(obj => obj.base === baseExchangeRatesName);
   const valueEUR = exchangeRatesDataUSD.rates.EUR.toFixed(2);
   const valueGBP = exchangeRatesDataUSD.rates.GBP.toFixed(2);

   return (
      <header className="currency" id="head">
         <div className="container">
            <div className="row justify-content-center mb-2">
               <div className="col-8">
                  <h4 className="text-center">
                     Exchange rates - <span>USD</span>
                  </h4>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row justify-content-around p-2">
               <div className="col-4 d-flex align-items-center justify-content-center">
                  <span>EUR</span>
                  <img src="https://www.svgrepo.com/show/197730/euro.svg" alt="euro" className="mx-2" />
                  <span className="rate-value--EUR">{valueEUR}</span>
               </div>
               <div className="col-4 d-flex align-items-center justify-content-center">
                  <span className="rate-value--GBP">GBP</span>
                  <img src="https://www.svgrepo.com/show/359464/pound.svg" alt="gbp" className="mx-2" />
                  <span>{valueGBP}</span>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;