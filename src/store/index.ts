import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/auth';

export const index = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
