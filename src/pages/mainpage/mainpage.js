/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import * as S from './styles';
import { Main } from "../../components/main/main";
import { Bar } from '../../components/bar/bar';

export const Mainpage = ({ setToken }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const changeState = () => setIsLoading(!isLoading)
        const timer =setTimeout(changeState, 5000)
    
        return () => clearTimeout(timer)
      }, [])

    if (localStorage.getItem('token', 'token')) {
        return (
            <S.Container>
                <Main isLoading={isLoading} setToken={setToken} />
                <Bar isLoading={isLoading} setToken={setToken} />
            </S.Container>
        )
    }
}