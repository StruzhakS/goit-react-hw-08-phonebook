import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';

export const reducer = combineReducers({
  contacts: contactReducer,
});
