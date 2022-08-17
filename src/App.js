import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import UserInput from './components/Inputform/inputform';
import ResultTable from './components/ResultTable/resultTable';
import { getStockData } from './api';
import { validateStockSymbol } from './helpers/validateStockSymol';

function App() {

  const [stock, setstockSymbol] = useState("");
  const [stockData, setstockData] = useState([]);
  const [numberOfDays, setselectednumberOfDays] = useState(0);
  const [socialMedia, setSocialMedia] = useState(false);
  
  useEffect(()=> {
    // if(validateStockSymbol(stockSymbol)){
      //validation for stock symbol
    setstockData(getStockData(stock, numberOfDays)); 
// }
},[stock, numberOfDays, socialMedia]);

  const handleStockEntry = (stock) => {
    setstockSymbol(stock);
  };
  const handleDaysEntry = (days) => {
    setselectednumberOfDays(days)
  };
  const handleSocialMediaEntry = (socialMedia) => {
    setSocialMedia(socialMedia)
  };
    
  return (    
    <>    
    <Header/>
    <UserInput 
    handleSocialMediaEntry={handleSocialMediaEntry}
    handleDaysEntry={handleDaysEntry} 
    handleStockEntry={handleStockEntry}  />
    <ResultTable 
    data={stockData} />
    </>
  );
}

export default App;
