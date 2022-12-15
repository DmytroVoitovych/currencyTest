import { controlStyle, wraper } from "./baseStyle";
import { useGetStaticCurrency } from "axiosConfig/funcGetStaticCurrency";
import { Converter } from "./converter/Converter";
import { header, boxHeader, footer } from "./AppHeader.styled";
import { ReactComponent as Bread } from '../img/bread.svg';
import CountUp from 'react-countup';
const year = new Date().getFullYear();

export const App = () => {
  const {eur, usd} = useGetStaticCurrency();

  return (
    <div
      style={controlStyle}
    >
      <>
        <header css={header} style={wraper}>
          <div css={boxHeader}>
          <h1>currency exchange</h1>
            <ul>
              <li>
                <p>USD to UAH: {<CountUp end={usd} decimals={2} />}</p>
            </li>
              <li>
                <p>EUR to UAH: {<CountUp end={eur}  decimals={2} />}</p>
              </li>
           </ul>
            </div>
        </header>
        <main style={{...wraper,paddingTop:'96px', paddingBottom:'107px', textAlign:'center'}}>
          <Converter />
        </main>
        <footer css={footer} style={wraper}>
          <a href="https://www.linkedin.com/in/dmytro-voitovych/"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            By Dmytro {year}
          </a>
          <Bread />
        </footer>
        </>
    </div>
  );
};
