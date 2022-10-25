
const emulateArr = (from,to) => {

    const arrCurrency = [from, 'EUR', 'USD', 'UAH'];
 
    const currentItemFrom = new Set(arrCurrency);
    const currentItemTo = new Set([to].concat(arrCurrency));

    return [currentItemFrom,currentItemTo]
}
export {emulateArr};