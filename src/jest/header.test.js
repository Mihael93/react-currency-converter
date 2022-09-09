import { createRoot, render, screen, unmountComponentAtNode } from "react-dom";
import Header from '../components/Header/Header';

const initialState = [
   { "id": 1, "base": "USD", "rates": { "GBP": 0.81799, "USD": 1, "EUR": 0.97742 } },
   { "id": 2, "base": "GBP", "rates": { "GBP": 1, "USD": 1.22249, "EUR": 1.19489 } },
   { "id": 3, "base": "EUR", "rates": { "GBP": 0.83689, "USD": 1.02309, "EUR": 1 } }
];


describe('Currency rates', () => {

   let currenciesRatesData;
   let container = document.getElementById('head');
   const root = createRoot(container);


   beforeAll(() => {
      currenciesRatesData = initialState;
      container = document.createElement("div");
      document.body.appendChild(container);
   });

   afterAll(() => {
      root.unmount();
      container.remove();
      container = null;
   });


   test('should render container for displaying EUR to USD rate', () => {
      root.render(<Header />);
      const rateElemEUR = screen.getByText(/eur/i);
      expect(rateElemEUR).toBeTruthy();
   });

   test('should render container for displaying GBP to USD rate', () => {
      render(<Header />);
      const rateElemGBP = screen.getByText(/gbp/i);
      expect(rateElemGBP).toBeTruthy();
   });
   test('should display EUR to USD rate', (done) => {
      render(<Header />);
      let baseCurrencyName = 'USD';
      let exchangeRateEUR = document.querySelector(".rate-value--EUR").innerHTML;
      let baseExchangeRates = currenciesRatesData.currency.find(obj => obj.base === baseCurrencyName);
      const controlRateEUR = baseExchangeRates.rates.EUR.toFixed(2);

      setTimeout(() => {
         expect(exchangeRateEUR).toEqual(controlRateEUR);

         done();
      }, 500)
   });

   test('should display GBP to USD rate', (done) => {
      render(<Header />);
      let baseCurrencyName = 'USD';
      let exchangeRateGBP = document.querySelector(".rate-value--GBP").innerHTML;
      let baseExchangeRates = currenciesRatesData.currency.find(obj => obj.base === baseCurrencyName);
      const controlRateGBP = baseExchangeRates.rates.GBP.toFixed(2);

      setTimeout(() => {
         expect(exchangeRateGBP).toEqual(controlRateGBP);

         done();
      }, 500)
   });
});

