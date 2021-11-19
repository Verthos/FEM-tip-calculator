import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
:root{
    --background: #c5e4e7;
    --strong-cyan: #26c2ad;
    --darker-cyan: #00494d;
    --grayish-cyan-500: #5e7a7d;
    --grayish-cyan-450: #7f9c9f; 
    --grayish-cyan-200: #c5e4e7;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}


html{
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }

    @media(max-width: 340px){
        font-size: 82.5%
    }
}


body{
    font-family: sans-serif;
    width: calc(100vw - (100vw - 100%));
}


h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
}

button{
    cursor: pointer
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed
}


`