/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import * as S from './styles';
import { Main } from "../../components/main/main";
import { Bar } from '../../components/bar/bar';
import { getAllTracks } from '../../api';
import { ErrorNotification } from '../../components/error/error';
import { setAllTracks, setIsLoading } from '../../store/slices/trackslice';
import { selectIsLoading, currentTrackSelector } from '../../store/selectors/script';

export const Mainpage = () => {
    const isLoading = useSelector(selectIsLoading);
    const [getTracksError, setgetTracksError] = useState(null);
    const dispatch = useDispatch();
    const PlayTrack = useSelector(currentTrackSelector);
    const { token, setToken } = useContext(userContext);

      if (getTracksError) {
        return (
            <ErrorNotification />
        )
      }

    if (localStorage.getItem('token', 'token')) {
        return (
            <S.Container>
                <Main 
                    isLoading={isLoading} 
                    setToken={setToken}/>
                
                {/* {PlayTrack ? <Bar isLoading={isLoading}/> : null}
                <Outlet /> */}
            </S.Container>
        )
    }
}