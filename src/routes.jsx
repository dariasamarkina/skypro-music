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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};