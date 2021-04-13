import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
