const baseURL = 'https://currency-exchange.p.rapidapi.com/exchange';
const KEY = '163263d4e0mshde2b148f6f367e6p1a3459jsn1e509fda0bd9';
const HOST =  'currency-exchange.p.rapidapi.com';
const cohort = 'interest-cohort=()';


export const setOptions = ({from, to}) => (
    {
        method: 'GET',
        url: baseURL,
        params: { from, to },
        redirect: 'follow',
        headers: { 'X-RapidAPI-Key': KEY, 'X-RapidAPI-Host': HOST }
    }
);



export const reqOptionsUsd = {
    params: {
        from: 'USD',
        to: 'UAH',
        amount: '1'
    },
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': HOST,
        'Permissions-Policy': cohort
    },
    redirect: 'follow'
}

export const reqOptionsEur = {
    params: {
        from: 'EUR',
        to: 'UAH',
        amount: '1'
    },
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': HOST,
        'Permissions-Policy': cohort
    },
    redirect: 'follow'
}

