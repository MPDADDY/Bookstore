const redux = require('redux')
import {AddBooks, RemoveBooks, addBooksReducer, removeBooksReducer} from '../books/booksSlice'
const createStore = redux.createStore
const store = createStore({addBooksReducer, removeBooksReducer,AddBooks,RemoveBooks})
const unsubscribe = store.subscribe(()=> store.getState())

unsubscribe()
