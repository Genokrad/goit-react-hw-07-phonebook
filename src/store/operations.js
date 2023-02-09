import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const instance = axios.create({
//   baseURL: 'https://63e3ac2465ae49317714a1cf.mockapi.io/',
// });

axios.defaults.baseURL = 'https://63e3ac2465ae49317714a1cf.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'users/fetchContacts',
  async (_, { rejectWithValue }) => {
    const result = await axios.get('/contacts');
    return result.data;
  }
);
//
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    const result = await axios.post('/contacts', contact);
    return result.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    const result = await axios.delete(`/contacts/${id}`);
    return result.data;
  }
);

// https://63e3ac2465ae49317714a1cf.mockapi.io/

// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".
