import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musixMatchApi = createApi({
  reducerPath: 'lyricsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://musixmatch-lyrics-songs.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', import.meta.env.VITE_RAPID_API_KEY);

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getLyrics: builder.query({
      query: ({artist, title}) => `/songs/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}&type=json`
    })
  })
})

export const {
  useGetLyricsQuery
} = musixMatchApi;