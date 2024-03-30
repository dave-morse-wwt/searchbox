import { configureStore } from '@reduxjs/toolkit'
import { searchApi } from './services/searchApi'
import { setupListeners } from '@reduxjs/toolkit/query'
// ...

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
})

setupListeners(store.dispatch) // reason is in https://redux-toolkit.js.org/tutorials/rtk-query

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch