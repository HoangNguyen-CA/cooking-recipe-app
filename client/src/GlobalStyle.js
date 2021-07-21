import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
     font-size: 90%;
     font-family: "Roboto", 'Times New Roman', serif;
     color: ${({ theme }) => theme.colors.dark}
    }

    @media ${({ theme }) => theme.breakpoints.tablet}{
        html{
            font-size: 100%;
        }
    }

`;

export default GlobalStyle;
