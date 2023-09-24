/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import * as S from './styles';
import { Main } from "../../components/main/main";
import { Bar } from '../../components/bar/bar';
import { getAllTracks } from '../../api';

export const Mainpage = ({ setToken }) => {

    const [getTracks, setGetTracks] = useState();
    useEffect(() => {
    // eslint-disable-next-line no-console
    getAllTracks().then((tracks) => {
        console.log(tracks);
        setGetTracks(tracks);
    });
  }, [])

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const changeState = () => setIsLoading(!isLoading)
        const timer =setTimeout(changeState, 5000)
    
        return () => clearTimeout(timer)
      }, [])

    if (localStorage.getItem('token', 'token')) {
        return (
            <S.Container>
                <Main isLoading={isLoading} setToken={setToken} getTracks={getTracks} />
                <Bar isLoading={isLoading}/>
            </S.Container>
        )
    }
}