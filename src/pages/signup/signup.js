/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style
import { Link } from "react-router-dom";
import * as S from './styles';

export const Signup = () => {
    return (
        <S.Signupblock>
            <h1>Здесь можно будет зарегистрироваться</h1>
            <Link to="/login">
                <p>Уже есть аккаунт, войти</p>
            </Link>
        </S.Signupblock>
    )
}   