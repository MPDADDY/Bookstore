import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  books:[]
}

const BookSlice = createSlice({
  name: books,
  initialState,
  reducer: {
    added: (state,action) => {
      state.books.push(action.payload)
    },
    removed: (state, action) => {
      const itemId = action.payload
      state.books = state.books.filter(book => book.itemId !== itemId)
    }
  }
})

export const {added, removed} = BookSlice.actions
export default BookSlice.reducer