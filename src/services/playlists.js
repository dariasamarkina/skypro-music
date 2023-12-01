/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('token'));
  console.log(accessToken.token.access);

  if(!accessToken) {
    return;
  };

  return accessToken.token.access;
};

// const refreshToken = () => {
//   fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
//   method: "POST",
//   body: JSON.stringify({
//     refresh: accessToken(),
//   }),
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

// refreshToken();

const DATA_TAG = { type: 'Tracks', id: 'LIST'};

// eslint-disable-next-line import/prefer-default-export
export const playlistApi = createApi({
  reducerPath: 'playlistApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
    tagTypes: ['Tracks'],
  }),

  endpoints: (builder) => ({

    getAllTracks: builder.query({
      query: () => ({
        url: 'catalog/track/all/',
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    getFavoriteTracks: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    addFavoriteTracks: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),

    deleteFavoriteTracks: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken()}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
      }),
    })
})

export const { useGetFavoriteTracksQuery, useGetAllTracksQuery, useAddFavoriteTracksMutation, useDeleteFavoriteTracksMutation } = playlistApi;
