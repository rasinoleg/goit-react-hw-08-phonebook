
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';



// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// export const fetchTasks = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/api/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const createContact = createAsyncThunk(
//   'contacts/onAddContact',
//   async (contactData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/contacts', contactData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       await axios.delete(`/api/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


