/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { Main } from "../../components/main/main";
import { Bar } from '../../components/bar/bar';
import { getAllTracks } from '../../api';
import { ErrorNotification } from '../../components/error/error';
import { currentPlayTrack } from '../../store/selectors/script';
import { setCurrentPlaylist } from '../../store/actions/creators/script';

export const Mainpage = ({ setToken }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [getTracksError, setgetTracksError] = useState(null);

    const dispatch = useDispatch();

    const PlayTrack = useSelector(currentPlayTrack);

        useEffect(() => {
            setIsLoading(true);
            
            // eslint-disable-next-line no-console
            getAllTracks().then((playlist) => {
                dispatch(setCurrentPlaylist(playlist));
                setIsLoading(false);
                setgetTracksError(null);
            })
            .catch ((error) => {
                console.log(error.message);
                setgetTracksError(error.message);
                setIsLoading(false);
            })
          }, [])
        
     
    useEffect(() => {
        const changeState = () => setIsLoading(!isLoading)
        const timer =setTimeout(changeState, 5000)
    
        return () => clearTimeout(timer)
      }, [])

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
                
                {PlayTrack ? <Bar isLoading={isLoading}/> : null}
            </S.Container>
        )
    }
}