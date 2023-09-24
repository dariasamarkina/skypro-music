/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style
import { Link, useNavigate } from "react-router-dom";
import * as S from './styles';

export const Login = ({ setToken }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', 'token');
        setToken(true);
        navigate('/', { replace: true })
    }

    return (
        <S.Loginblock>
            <h1>Авторизуйтесь, чтобы продолжить</h1>
            <button onClick={handleLogin}>Войти</button>
            <Link to="/signup">
            <p>Зарегистрироваться</p>
            </Link>
        </S.Loginblock>
    )
}   