import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const apiKey = 'bPFgLf0cFezpSvdpLb1H';

const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}`;

export const getBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(url);
    const resData = res.data;
    if (resData === '') return [];

    const arrayOfItems = Object.keys(resData).map((key) => {
      const item = resData[key][0];
      return {
        itemId: key,
        author: item.author,
        title: item.title,
        category: item.category,
      };
    });
    return arrayOfItems;
  } catch (error) {
    return rejectWithValue('Failed to fetch books');
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (newBook, { rejectWithValue }) => {
  try {
    const res = await axios.post(url, newBook);
    if (res.status === 201) {
      return newBook;
    }
    return rejectWithValue('Failed');
  } catch (error) {
    return rejectWithValue('Failed');
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`${url}/${itemId}`);
    if (res.status === 201) {
      return itemId;
    }
    return rejectWithValue('Failed to remove book');
  } catch (error) {
    return rejectWithValue('Failed to remove book');
  }
});

const initialState = {
  books: [],
  statusFetch: 'idle',
  statusAdd: 'idle',
  statusRemove: 'idle',
  error: null,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    added: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removed: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.id !== itemId);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.statusFetch = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.statusFetch = 'succeeded';
        state.books = action.payload;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.statusAdd = 'loading';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.statusAdd = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.statusRemove = 'loading';
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.statusRemove = 'succeeded';
        state.books = state.books.filter((book) => book.itemId !== action.payload);
      });
  },
});

export const { added, removed } = bookSlice.actions;

export default bookSlice.reducer;
