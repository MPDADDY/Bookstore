import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { added } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    console.log(newBook);
    dispatch(added(newBook));
    setTitle('');
    setAuthor('');
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
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
          onChange={handleCategory}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="submit" disabled={!isFormValid}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
