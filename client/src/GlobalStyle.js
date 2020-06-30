import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
     font-size: 80%;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    @media ${({ theme }) => theme.breakpoints.tablet}{
        html{
            font-size: 100%;
        }
    }

`;

export default GlobalStyle;
