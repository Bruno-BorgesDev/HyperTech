import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;  
        overflow: none;      
    }

    body {
        background: #EAEDED;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`