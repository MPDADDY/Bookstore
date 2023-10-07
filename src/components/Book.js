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

/*
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {removeBookAsync} from '../redux/books/bookSlice';

const Book = ({book}) => {
  const {
    itemId, title, author, category,
  } = book;

  const progress = Math.floor(Math.random() * 101);
  const dispatch = useDispatch();

  const handleRemove = async () => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="book-container">
      <div className="book-header">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div>
          <CircularProgressbar value={progress} />
        </div>
      </div>
      <div className="vl" />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
*/
