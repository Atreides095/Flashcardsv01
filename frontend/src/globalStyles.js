import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


    html {
        --green-light: #66FCF1;
        --green-dark: #45A29E;
        --grey-light: #C5C6C7;
        --grey-dark: #1F2833;
        --black: #0B0C10;
        --pink: #F472FF;
        --grad: linear-gradient(0deg, rgba(31,40,51,1) 0%, rgba(11,12,16,1) 100%);

        font-size: 18px;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
`;
