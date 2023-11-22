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
import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { CATEGORIES } from '../../components/sidebar/categories';
import { userContext } from "../../context/userContext";
import * as S from './styles';
import { ContentTitle } from "../../components/playlistheader/styles";
import { Playlist } from "../../components/playlist/playlist";
import { selectIsPlaying } from "../../store/selectors/script";

export const Categories = ({ isLoading }) => {
    const params = useParams();
    const {token, setToken} = useContext(userContext);
    const dispatch = useDispatch();

    const category = CATEGORIES.find((category) => category.id === Number(params.id));

        if (localStorage.getItem('token', token)) {
            return (
                <div>
                    <S.CenterblockH2>Category Page: {category.id}</S.CenterblockH2>
                    <S.CenterblockContent>
                        <ContentTitle isLoading={isLoading} />
                        <Playlist isLoading={isLoading} />
                    </S.CenterblockContent>
                </div>
            )
                } else {
                    useEffect(() => {
                        setToken(false);
                        dispatch(selectCurrentTrack({}));
                        dispatch(selectIsPlaying(false));
                    }, [])
        }
}

   