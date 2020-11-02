import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        box-sizing: border-box;
        background : #212529;
        display: flex;
        color: white;
    }

    a{
        text-decoration:none;
        color: inherit;
    }

    input{
        outline: none;
        border: none;
        border-bottom: 3px solid rgba(0,0,0,0.3);
        background-color: inherit;
    }
`;
