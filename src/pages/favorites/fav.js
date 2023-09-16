/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style, import/no-unresolved
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export const Favorites = ({ setToken }) => {
    if (localStorage.getItem('token', 'token')) {
        return (
            <S.Favorites>
                <h1>Мой плейлист</h1>
                <h2>Избранные треки</h2>
            </S.Favorites>
        ) 
    } else {
        const navigate = useNavigate();
        useEffect(() => {
            setToken(false);
            navigate('/login', { replace: true })
        }, [])
    }
}
    