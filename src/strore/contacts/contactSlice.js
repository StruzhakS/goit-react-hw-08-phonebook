import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import {
  addContactOperation,
  deleteContactOperation,
  fetchContacts,
} from './Operations';

export const contactSlice = createSlice({
  name: 'Contact',
  initialState,
  reducers: {
    filterContactAction: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContactOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(addContactOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(el => el.id !== payload.id);
      })
      .addCase(deleteContactOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContactAction, deleteContactAction, filterContactAction } =
  contactSlice.actions;

// .addCase(
//       (addContactOperation.pending,
//       state => {
//         state.isLoading = true;
//       })
//     )
//     .addCase(addContactOperation.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = payload;
//     })
//     .addCase(addContactOperation.rejected, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     });
