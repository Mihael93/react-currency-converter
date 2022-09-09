import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ConvertBlock from './components/Main/ConvertBlock';

function App(props) {

   const initialState = [
      { "id": 1, "base": "USD", "rates": { "GBP": 0.81799, "USD": 1, "EUR": 0.97742 } },
      { "id": 2, "base": "GBP", "rates": { "GBP": 1, "USD": 1.22249, "EUR": 1.19489 } },
      { "id": 3, "base": "EUR", "rates": { "GBP": 0.83689, "USD": 1.02309, "EUR": 1 } }
   ];
   const [data, setData] = useState(initialState);

   useEffect(() => {
      const serverAPI = "http://localhost:3030/currency";
      fetch(serverAPI, { method: "GET" })
         .then((res) => {
            if (res.ok) {
               return res.json();
            }
            throw new Error('Server bad response');
         })
         .then((res) => { setData(res) })
         .catch((err) => console.log(err));
   }, [props]);

   const scaleNames = data.map(item => ({
      id: item.id,
      base: item.base,
   }));

   return (
      <div className="app-wrapper">
         <Header data={data} />
         <ConvertBlock data={data} scaleNames={scaleNames} />
      </div>
   );
}

export default App;
