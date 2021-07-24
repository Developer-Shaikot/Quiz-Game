import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './images/photo-1519834785169-98be25ec3f84.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: linear-gradient(
          
            rgba(0, 0, 0, 0.884),rgba(0, 0, 0, 0.527)
          ),  url(${bgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'catamaran', sans-serif;
    }

`;

export const Warper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #FFF;
    }

    .score {
        color: #FFF;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #80f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px  2px #0084a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;

    }
`