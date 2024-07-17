// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './toggleSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth: authReducer,
  },
});

export default store;
