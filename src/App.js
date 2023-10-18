/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useEffect } from 'react';
import GlobalStyle from './styles';
import * as S from './styles';
import { AppRoutes } from "./routes";
import { userContext } from './context/userContext';

function App() {
  // const initialToken = localStorage.getItem('token', '');
  // const [token, setToken] = useState(initialToken);
  const [token, setToken] = useState();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer =setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <userContext.Provider value={token}>
      <S.Wrapper>
        <GlobalStyle />
        <AppRoutes token={token} setToken={setToken}/>
      </S.Wrapper>
    </userContext.Provider>
  )
}

export default App