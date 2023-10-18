/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { registerUser, loginUser } from "../../api";

export function AuthPage({ isLoginMode = false, setToken }) {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    // alert(`Выполняется вход: ${email} ${password}`);
    // setError("Неизвестная ошибка входа");
    try {
      const userData = await loginUser({ email, password });
      localStorage.setItem('token', JSON.stringify(userData.username));

      setToken(userData.username);
      navigate('/');
    } 
    catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    // alert(`Выполняется регистрация: ${email} ${password}`);
    // setError("Неизвестная ошибка регистрации");
    try {
      const userData = await registerUser({ email, password, username});
      localStorage.setItem('token', JSON.stringify(userData.username));

      setToken(userData.username);
      navigate('/');
    } 
    catch (error) {
      setError(error.message);
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/signup">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Имя"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
              <Link to="/login">
                <S.SecondaryButton>Войти</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}