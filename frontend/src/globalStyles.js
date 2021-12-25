import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


    html {
        --green-light: #66FCF1;
        --green-dark: #45A29E;
        --grey-light: #DADADA;
        --grey-dark: #1F2833;
        --black: #0B0C10;
        --pink: #F472FF;
        --white: #fff;
        --grad: linear-gradient(0deg, rgba(31,40,51,1) 0%, rgba(11,12,16,1) 100%);

        font-size: 18px;
    }

    @media (min-width: 2000px) {
        html {
            font-size: 25px;
            }
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
