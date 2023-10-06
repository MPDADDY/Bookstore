import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: 'Kanissa',
      author: 'Babuu',
      category: 'liguistic',
    },
    {
      id: '2',
      title: 'kifo Kisimani',
      author: 'mama wanyika',
      category: 'linguistic',
    },
    {
      id: '3',
      title: 'bundox',
      author: 'mzee yusuf',
      category: 'science',
    },
  ],
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
});

export const { added, removed } = bookSlice.actions;

export default bookSlice.reducer;
