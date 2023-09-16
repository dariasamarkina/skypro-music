/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style
import * as S from './styles';

export const Login = () => {
    return (
        <S.Loginblock>
            <h1>Авторизуйтесь, чтобы продолжить</h1>
            <button>Войти</button>
            <a>Зарегистрироваться</a>
        </S.Loginblock>
    )
}   