/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';

export function ErrorNotification () {
    return (
        <S.ErrorText>
            Произошла ошибка сервера. Попробуйте позже
        </S.ErrorText>
    )
}