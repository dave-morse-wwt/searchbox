import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query<{ text: string }, string>({
        query: (name) => `search`,
      }),
    }),
  })
export const { useGetPokemonByNameQuery } = pokemonApi