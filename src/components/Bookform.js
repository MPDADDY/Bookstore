import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';
import './BookList.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };

      dispatch(addBookAsync(newBook));

      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  const isFormValid = !!category;

  return (
    <div className="book-input">
      <hr />
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={handleTitle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
        />
        <select
          className="books-option"
          value={category}
          onChange={handleCategory}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button className="blue_button" type="submit" disabled={!isFormValid}>Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
