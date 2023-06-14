import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, deleteContactApi, getContactsApi } from 'contactsApi';
// import { deleteContactAction } from './contactSlice';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};
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

export const register = createAsyncThunk('user/register', async userdata => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/signup',
      {
        name: userdata.userName,
        email: userdata.email,
        password: userdata.userPass,
      }
    );
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userLogin = createAsyncThunk('user/login', async userdata => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/login',
      {
        email: userdata.email,
        password: userdata.userPass,
      }
    );
    token.set(data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getRefreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const persistToken = thunkAPI.getState().auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios(
        'https://connections-api.herokuapp.com/users/current'
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
