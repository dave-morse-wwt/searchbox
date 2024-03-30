import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Id, Product, Ratings } from "../types/businessTypes";

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({

      search: builder.query<Product[], string>({
        query: (name) => {
          const queryParams = new URLSearchParams();
          queryParams.append("q", name);
          return `search?${queryParams.toString()}`},
      }),

      rating: builder.query<Ratings, Id[]>({
        query: (ids) => {
          const queryParams = new URLSearchParams();
          ids.forEach(id => queryParams.append("id", id));
          return `rating?${queryParams.toString()}`;
        },
      }),
    }),
  });

export const { useSearchQuery, useRatingQuery } = searchApi