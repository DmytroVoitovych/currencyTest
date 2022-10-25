import axios from "axios";
import debounce from "lodash.debounce";
import { setOptions } from "./option";


export const funcGetExchange = debounce( async (amount,funcRevers,setSum) => {
     
if(!amount || +amount === 0){
         return setSum('');
        }

        else if (+amount > 0) {
            
    return axios.request(setOptions(funcRevers())).then(response => {
        
        const res = response.data * +amount;
                   
        setSum(Math.trunc(res * 100) / 100);
                          
    }).catch(error => console.error(error));
            
        }
               
       return; 
},150);