/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./context/userContext";
import { AuthPage } from "./pages/auth/authpage"
import { Mainpage } from "./pages/mainpage/mainpage";
import { Notfound } from "./pages/notfound/notfound";
import { Favorites } from "./pages/favorites/fav";
import { Categories } from "./pages/categories/categories";
import { ProtectedRoute } from "./components/protectedroute/protectedroute";
import { Main } from "./components/main/main";

export const AppRoutes = () => {
  const {token, setToken} = useContext(userContext);

  return (
    <Routes>

      <Route path="/login" element={<AuthPage isLoginMode={true} setToken={setToken} />} />
      <Route path="/signup" element={<AuthPage isLoginMode={false} setToken={setToken}/>} />

      <Route path="/" element={
          <ProtectedRoute >
            <Mainpage setToken={setToken}/>
          </ProtectedRoute>
        }
       />

      <Route path="/favorites" element={
          <ProtectedRoute >
            <Favorites setToken={setToken}/>
          </ProtectedRoute>
        }
      />

      <Route path="/categories/:id" element={
        <ProtectedRoute >
            <Categories setToken={setToken}/>
        </ProtectedRoute>
      }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};