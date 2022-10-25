import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'https://currency-exchange.p.rapidapi.com/exchange';
const KEY = '163263d4e0mshde2b148f6f367e6p1a3459jsn1e509fda0bd9';
const HOST =  'currency-exchange.p.rapidapi.com';
const test = 'interest-cohort=("https://dmytrovoitovych.github.io/currencyTest/" self)';


export const useGetStaticCurrency = () => {
  const [currency, SetCurrency] = useState({ eur: 0, usd: 0 });

  const getUSD = () => axios.get(baseURL, { params: { from: 'USD', to: 'UAH', amount: '1' }, headers: { 'X-RapidAPI-Key': KEY, 'X-RapidAPI-Host': HOST,'Permissions-Policy':test  },redirect: 'follow' });
  const getEUR = () => axios.get(baseURL, { params: { from: 'EUR', to: 'UAH', amount: '1' }, headers: { 'X-RapidAPI-Key': KEY, 'X-RapidAPI-Host': HOST,'Permissions-Policy' :test },redirect: 'follow' });

   
  useEffect(() =>
    
    () => axios.all([getEUR(), getUSD()]).then(r => SetCurrency({
      eur: Math.trunc(r[0].data * 100) / 100,
      usd: Math.trunc(r[1].data * 100) / 100
    })).catch(e=>console.log(e)),
    
  [SetCurrency]);   

    
    return currency;  
};