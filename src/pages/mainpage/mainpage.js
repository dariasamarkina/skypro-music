/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import { Main } from "../../components/main/main";

export const Mainpage = ({ setToken }) => {
    if (localStorage.getItem('token', 'token')) {
        return (
            <Main setToken={setToken} />
        )
    }
}