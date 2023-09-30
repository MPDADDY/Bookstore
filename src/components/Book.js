import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div className="book-container">
      {book.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <span>
            <button type="button">Comment</button>
            <button type="button">Delete</button>
            <button type="button">Edit</button>
          </span>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Book;
