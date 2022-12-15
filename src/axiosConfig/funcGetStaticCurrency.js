import { useEffect, useState } from "react";
import axios from "axios";
import { reqOptionsEur, reqOptionsUsd } from "./option";

const baseURL = 'https://currency-exchange.p.rapidapi.com/exchange';

export const useGetStaticCurrency = () => {
  const [currency, SetCurrency] = useState({ eur: 0, usd: 0});

  const getUSD = () => axios.get(baseURL, reqOptionsUsd);
  const getEUR = () => axios.get(baseURL, reqOptionsEur);
  
   
  useEffect(() =>
    
    () => axios.all([getEUR(), getUSD()]).then(r => SetCurrency({
      eur: Math.trunc(r[0].data * 100) / 100,
      usd: Math.trunc(r[1].data * 100) / 100,
      
    })).catch(e=>console.log(e)),
    
  [SetCurrency]);   

    
    return currency;  
};