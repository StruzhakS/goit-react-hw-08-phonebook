import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, deleteContactApi, getContactsApi } from 'contactsApi';
// import { deleteContactAction } from './contactSlice';
axios.defaults.baseURL =
  'https://64870eb0beba6297278fcbfc.mockapi.io/Phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactOperation = createAsyncThunk(
  'contacts/addContact',
  async (user, thunkAPI) => {
    try {
      const data = await addContactApi(user);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactOperation = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactApi(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
