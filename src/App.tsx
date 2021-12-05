import React from "react";

import { createGlobalStyle } from "styled-components";

import Header from "./containers/Header";
import Body from "./containers/Body";

const GlobalStyle = createGlobalStyle`
    html, body{
        margin: 0;
        background-color: #fcfcfc;
        display: flex;
        justify-content: center;
    }
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <Body />
  </>
);

export default App;