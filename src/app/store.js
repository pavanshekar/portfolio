import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import paletteReducer from '../features/palette/paletteSlice';
import { githubApi } from '../features/github/githubApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    palette: paletteReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
