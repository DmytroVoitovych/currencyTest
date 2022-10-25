import { css } from "@emotion/react";

const breakpoints = [480, 630];

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);


const header = css`
background-color: #FFF1D5;
padding-top: 45px;
padding-bottom: 58px;
`; 

const boxHeader = css`
text-align:center;

h1{
font-family: "SeoulNamsan" ,sans-serif;
font-size: 60px;
font-weight: 400;
line-height: 1;
color: #CC800E;
text-transform: uppercase;
margin-bottom: 9px;

${mq[0]}{
  font-size: 10vw;
}
}

p{
font-family: 'Shrikhand', cursive;
font-style: italic;
font-size: 38px;
line-height: 1.45;
color: #CC800E;

${mq[0]}{
  font-size: 7vw;
}
}
`;

const footer = css`
display:flex;
justify-content: space-between;
align-items: center;
padding-bottom:57px;

${mq[0]}{
  flex-direction: column;
  gap: 17px;  
}

a{
font-family: "SeoulNamsan" ,sans-serif;
font-weight: 400;
font-size: 20px;
line-height: 1.5;
color: #CC800E;
align-self: flex-end;

${mq[0]}{
  align-self: auto;
}
}
`;

export { header, boxHeader, footer };
