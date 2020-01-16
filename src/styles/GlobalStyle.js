import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,700,800&display=swap');
html {
    font-size: 62.5%;
}
body {
    background-color: #fff;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
 } 
 
 body div {
    box-sizing: border-box;
 }
`;

export default GlobalStyle;
