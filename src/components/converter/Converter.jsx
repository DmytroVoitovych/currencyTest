import { funcSetOption } from './funcSetOption';
import { nanoid } from 'nanoid';
import { useEffect,useCallback,useState, memo } from 'react';
import { usePrevious } from 'react-delta';
import { emulateArr } from './emulateArr';
import { boxInput, form } from './Converter.styled';
import { funcGetExchange } from 'axiosConfig/funcGetExchange';


export const Converter = memo(() => {
    //state base
    const [from, setFrom] = useState('EUR');
    const [to, setTo] = useState('UAH');
    const [amount, setAmount] = useState('');
    const [sum, setSum] = useState('');
    const [focus, setFocus] = useState('');
    
    //prev state
    const lastFocus = usePrevious(focus);
    
    //arr options
    const [currentItemFrom, currentItemTo] = emulateArr(from, to);

    const funcRevers = useCallback(() => {
        if (focus === 'from') {
          
            return { from: from, to: to };
        }
        
        return { to: from, from: to };
    }, [focus, from, to]);
              
    useEffect(() => {
    
        funcGetExchange(amount, funcRevers, setSum);
        
        return;
    }, [amount,funcRevers,]);
    
    useEffect(() => {
        if (!amount) {
            setSum('');
        }
    },[amount,sum]);
    

    return (<div>
        <form action=""
            onFocus={(e) => e.target.name === 'from' || e.target.name === 'to' ? setFocus(e.target.name) : setFocus(lastFocus)}
            onChange={(e) => funcSetOption(e, setFrom, setTo)}
            css={form}
        >
            <div css={boxInput}>
                <label htmlFor='focusfrom'>from: {from}  </label>
                <input 
                min={0}
                type="number"
                name='from'
                id='focusfrom'    
                onChange={(e) => setAmount(e.target.value)}
                value={focus === 'to' ? sum : amount}
                onClick={() =>   lastFocus !== 'from' && setAmount(sum)}
                    />
                   
            <select
                name="currencys"
                id="from"
                onClick={(e) => Object.values(e.target.options).forEach((e) => { if (e.value === to) { return e.disabled = true; }  })}
            >
                {[...currentItemFrom].map(e => <option key={nanoid()} value={e}>{e}</option>)}
                </select>
            </div>
            <div css={boxInput}>
                <label htmlFor='focusto'>to: {to} </label> 
            <input
                type="number"
                name='to'
                min={0}
                id='focusto'   
                onChange={(e) => setAmount(e.target.value)}
                value={focus === 'from' ? sum : amount}
                onClick={() => lastFocus !== 'to'  && setAmount(sum)}
                    />
                   
            <select
                name="currencys"
                id="to"
                onClick={(e) => Object.values(e.target.options).forEach((e) => { if (e.value === from) { return e.disabled = true; } })}
            >
                {[...currentItemTo].map(e => <option key={nanoid()} value={e}>{e}</option>)}
                </select>
                </div>
        </form>
    </div>);
});