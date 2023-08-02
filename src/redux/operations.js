import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUserRequest,
  logOutRequest,
  loginRequest,
  registerRequest,
  setToken,
  getContactsRequest,
  addContactRequest,
  deleteContactRequest,
} from 'services/api';

export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await registerRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async (formData, thunkAPI) => {
    try {
      const data = await loginRequest(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'user/logOutThunk',
  async (_, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.user.token
      // setToken(token)
      await logOutRequest();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'user/refreshUserThunk',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    try {
      setToken(token);
      const data = await currentUserRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await addContactRequest(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await deleteContactRequest(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
