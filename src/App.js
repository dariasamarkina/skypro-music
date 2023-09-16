/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from './components/bar/bar';
import { Main } from './components/main/main';
import GlobalStyle from './styles';
import * as S from './styles';
import { AppRoutes } from "./routes";

function App() {
  const initialToken = localStorage.getItem('token', '');
  const [token, setToken] = useState(initialToken);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer =setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <S.Wrapper>
      <GlobalStyle />
      <AppRoutes token={token} setToken={setToken}/>
      {/* <S.Container>
        <Main isLoading={isLoading}/>
        <Bar isLoading={isLoading}/>
      </S.Container> */}
    </S.Wrapper>
  )
}

export default App