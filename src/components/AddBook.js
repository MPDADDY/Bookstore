import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import added from '../redux/books/booksSlice';

const appId = 'WK9T7Uu9HWgolmldt4eN';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4,
      title,
      author,
      category,
    };

    try {
      // Make a POST request to the API to add the new book
      const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`, newBook);

      // Dispatch the 'added' action to update the local Redux store
      dispatch(added(response.data));

      // Reset the form fields
      setTitle('');
      setAuthor('');
      setCategory('');
    } catch (error) {
      throw new Error('error');
    }
  };

  const isFormValid = !!category;

  return (
    <div className="add-new-book">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="submit" disabled={!isFormValid}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
