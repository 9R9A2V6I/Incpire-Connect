// src/redux/rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import toggleSlice from './toggleSlice';
// Import other slices here

const rootReducer = combineReducers({
  toggleBG: toggleSlice,
  // Add other reducers here
});

export default rootReducer;
