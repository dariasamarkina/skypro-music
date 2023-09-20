/* eslint-disable import/no-duplicates */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style, import/no-unresolved
import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../components/sidebar/categories';
import * as S from './styles';

export const Categories = () => {
    const params = useParams();

    // if (localStorage.getItem('token', 'token')) {
        const category = CATEGORIES.find((category) => category.id === Number(params.id));;

        return (
            <S.Categories>
                <h1>Подборка № {category.id}</h1>
            </S.Categories>
        )
    // } else {
    //     const navigate = useNavigate();
    //     useEffect(() => {
    //       setToken(false);
    //       navigate('/login', { replace: true })
    //     }, [])
    // }
    }

   