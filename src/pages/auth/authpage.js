/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import * as S from "./styles";
import { registerUser, loginUser,getAccessToken } from "../../api";
import { userContext } from "../../context/userContext";

export function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState('');
  const [isAuthProcess, setIsAuthProcess] = useState(false);

  const [btnBlocked, setBtnBlocked] = useState(false);

  const navigate = useNavigate();
  const { token, setToken } = useContext(userContext);

  const handleLogin = async ({ email, password }) => {

    if (!email) {
      setError  ('Введите e-mail');
      return
    } else if (!password) {
      setError ('Введите пароль');
      return
    } 
    else {
      try {
        setIsAuthProcess(true);
        setBtnBlocked(true);
        const userData = await loginUser({ email, password });
        userData.token = await getAccessToken({ email, password });
        localStorage.setItem('token', JSON.stringify(userData));
        setToken(userData);
        navigate('/');
        } 
        catch (error) {
          setError(error.message);
        } 
        finally {
          setBtnBlocked(false);
        }
    } 
  };

  const handleRegister = async () => {
    if (!email) {
      setError  ('Введите e-mail');
      return
    } else if (!password) {
      setError ('Введите пароль');
      return
    }
    else if (!username) {
      setError ('Введите имя пользователя');
      return
    } 
    else if (password !== repeatPassword) {
      setError ('Пароли не совпадают');
      return
    } 
    else if (password.length < 8) {
      setError ('Пароль слишком короткий. Он должен содержать не менее 8 символов');
      return
    } 
    else {
      try {
        setBtnBlocked(true);

        const userData = await registerUser({ email, password, username});
        localStorage.setItem('token', JSON.stringify(userData.username));

        setToken(userData.username);
        navigate('/');
      } 
        catch (error) {
          setError(error.message);
        }
        finally {
          setBtnBlocked(false);
        }
   }
  };

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
              <S.PrimaryButton disabled={btnBlocked} onClick={() => handleLogin({ email, password })}>
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
              <S.PrimaryButton disabled={btnBlocked} onClick={handleRegister}>
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