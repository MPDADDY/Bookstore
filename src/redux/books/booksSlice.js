const ADD_BOOKS = 'ADD_BOOKS';
const REMOVE_BOOKS = 'REMOVE_BOOKS';
const myPayload = {
  bookName: '',
  category: ''
}

function AddBooks() {
  return {
    type: ADD_BOOKS,
    payload: myPayload
  }
}

function RemoveBooks(quant) {
  return {
    type: REMOVE_BOOKS,
    payload: quant
  }
}

const initialBooksState = {
  numOfBooks: []
}

const addBooksReducer = (state= initialBooksState, action) => {
  switch(action.type) {
    case ADD_BOOKS: return {
      ...state,
      numOfBooks: state.numOfBooks + action.payload
    }
    default: state
  }
} 

const removeBooksReducer = (state= initialBooksState, action) => {
  switch(action.type) {
    case REMOVE_BOOKS: return {
      ...state,
      numOfBooks: state.numOfBooks  - action.payload
    }
    default: state
  }g
}

export default {AddBooks, RemoveBooks ,addBooksReducer, removeBooksReducer}