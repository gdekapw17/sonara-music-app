import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const deezerApi = createApi({
  reducerPath: 'deezerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: (limit) => `/chart/0?limit=${limit}` }),
    getSongDetails: builder.query({ query: (songid) => `/track/${songid}` }),
    getAlbumDetails: builder.query({ query: (albumId) => `/album/${albumId}` }),
    getArtistDetails: builder.query({query: (artistId) => `/artist/${artistId}`}),
    getArtistTopTracks: builder.query({
      query: ({ artistId, limit }) => `/artist/${artistId}/top?limit=${limit}`,
    }),
    getSongsByGenre: builder.query({ query: (genreId) => `/chart/${genreId}/tracks` }),
    getSongsBySearch: builder.query({ 
      query: (searchTerm) => `/search?q=${searchTerm}` 
    }),
  }),
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetAlbumDetailsQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopTracksQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery
} = deezerApi;
