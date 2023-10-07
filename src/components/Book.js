import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removed } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (bookId) => {
    dispatch(removed(bookId));
  };
  return (
    <div className="book-container">
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <span>
            <button type="button">Comment</button>
            <button type="button" onClick={() => handleRemoveBook(book.id)}>Delete</button>
            <button type="button">Edit</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Book;
