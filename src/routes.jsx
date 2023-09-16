/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Mainpage } from "./pages/mainpage/mainpage";
import { Signup } from "./pages/signup/signup";
import { Notfound } from "./pages/notfound/notfound";
import { Favorites } from "./pages/favorites/fav";
import { Categories } from "./pages/categories/categories";
import { ProtectedRoute } from "./components/protectedroute/protectedroute";

export const AppRoutes = ({token, setToken}) => {
  return (
    <Routes>
      {/* <Route path="/" element={<Mainpage />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={
          <ProtectedRoute isAllowed={token}>
            <Mainpage setToken={setToken}/>
          </ProtectedRoute>
        }
       />
      {/* <Route path="/favorites" element={<Favorites />} /> */}
      <Route path="/favorites" element={
          <ProtectedRoute isAllowed={token}>
            <Favorites setToken={setToken}/>
          </ProtectedRoute>
        }
      />
      {/* <Route path="/categories/:id" element={<Categories />} /> */}
      <Route path="/categories/:id" element={
        <ProtectedRoute isAllowed={token}>
            <Categories setToken={setToken}/>
        </ProtectedRoute>
      }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};