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
// import { CATEGORIES } from '../../components/sidebar/categories';
import { userContext } from "../../context/userContext";
import * as S from './styles';
import { ContentTitlePlaylist } from "../../components/playlisttitle/playlisttitle";
import { Playlist } from "../../components/playlist/playlist";
import { selectIsPlaying } from "../../store/selectors/script";
import { useGetSelectionByIdQuery } from "../../services/playlists";
import { setCurrentPlaylist, setIsLoading } from "../../store/slices/trackslice";

export const Categories = ({ isLoading }) => {
    const params = useParams();
    const {token, setToken} = useContext(userContext);
    const dispatch = useDispatch();

    // const category = CATEGORIES.find((category) => category.id === Number(params.id));

    const { data: currentCategory } = useGetSelectionByIdQuery(Number(params.id));

    useEffect(() => {
        dispatch(setCurrentPlaylist(currentCategory?.items));
        dispatch(setIsLoading(false));
    }, [currentCategory]);

        if (localStorage.getItem('token', token)) {
            return (
                <div>
                    <S.CenterblockH2>Category Page: {currentCategory?.name}</S.CenterblockH2>
                    <S.CenterblockContent>
                        <ContentTitlePlaylist isLoading={isLoading} />
                        <Playlist tracks={currentCategory?.items} />
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

   