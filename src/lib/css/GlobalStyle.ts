import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        box-sizing: border-box;
        background : #212529;
        display: flex;
    }

    a{
        text-decoration:none;
        color: inherit;
    }
`;
