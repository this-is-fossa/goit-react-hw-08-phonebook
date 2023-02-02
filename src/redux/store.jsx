import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
  },
});
