import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import './Book.css';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;

  const [progress, setProgress] = useState(Math.floor(Math.random() * 101));
  const [currentPage, setCurrentPage] = useState(Math.floor(Math.random() * 301));

  const dispatch = useDispatch();

  const handleRemove = async () => {
    dispatch(removeBookAsync(itemId));
  };

  const handleUpdateProgress = () => {
    const newProgress = Math.floor(Math.random() * 101);
    const newPage = Math.floor(Math.random() * 301);
    setProgress(newProgress);
    setCurrentPage(newPage);
  };

  return (
    <div className="book_container">
      <div className="book-header">
        <h3 className="book-category">{category}</h3>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="book-actions">
          <button className="buttons" type="button">Comments |</button>
          <button className="buttons" type="button" onClick={handleRemove}>Remove |</button>
          <button className="buttons" type="button">Edit</button>
        </div>
      </div>
      <section className="book-progress">
        <div className="completed">
          <h2>
            {progress}
            %
          </h2>
          <span>Completed</span>
        </div>
        <div className="vertical-line" />
        <div className="update-progress-section">
          <span>Current Page</span>
          <p>
            Page:
            {currentPage}
          </p>
          <button className="blue_button" type="button" onClick={handleUpdateProgress}>Update Progress</button>
        </div>
      </section>
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
