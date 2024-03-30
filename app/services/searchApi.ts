import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
      search: builder.query<string[], string>({
        query: (name) => {
          const usp = new URLSearchParams();
          usp.append("q", name);
          return `search?${usp.toString()}`},
      }),
      rating: builder.query<Record<string,number>, string[]>({
        query: (names) => {
          const usp = new URLSearchParams();
          names.forEach(name => usp.append("q", name));
          return `rating?${usp.toString()}`;
        },
      }),
    }),
  })
export const { useSearchQuery, useRatingQuery } = searchApi