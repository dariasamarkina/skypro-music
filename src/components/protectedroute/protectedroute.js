/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, redirectPath="/login", isAllowed }) => {
    if(!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
}