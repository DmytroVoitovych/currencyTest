import { css } from "@emotion/react";

const breakpoints = [480, 630];
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);


const boxInput = css`
padding:23px 20px;
background-color: #FFF1D5;
border-radius: 10px;

display: grid;
gap: 17px;
grid-template-columns: 1fr minmax(0,278px) min-content;

${mq[1]}{
   position:relative; 
   grid-template-columns:minmax(0,278px) min-content; 
}

${mq[0]}{
grid-template-columns:minmax(0,278px); 
}


input{
padding: 13px 7px;
background-color: #FEFEFE;
border-radius: 10px;
border:none;

:focus{
     outline: 1px solid #FFD596;
    }
}

select{
background-color: #FFD596;
border-radius: 10px;
padding-right: 30px;
padding-left: 30px;
border:none; 

font-family: 'SeoulNamsan', sans-serif;
text-transform: lowercase;
font-weight: 400;
font-size: 21px;
line-height: 1;

color: #CC800E;

:focus-visible{
   outline: 2px solid #FEFEFE;  
}

${mq[0]}{
place-self: center;
padding-bottom: 12px;
padding-top: 12px;
}
}

label{
align-self: center;
font-family: 'SeoulNamsan', sans-serif;
font-weight: 400;
font-size: 21px;
line-height: 1;
color: #CC800E;

${mq[1]}{
text-align: start;

position: absolute;
top: 3px;
left: 20px;
font-size: 16px;
line-height: 1;
}

${mq[0]}{
font-size: 21px;
text-align: center;
position: initial;
}
}
`;


const form = css`
display: inline-grid;
gap: 31px;
`;

export {boxInput,  form};