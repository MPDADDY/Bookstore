import React from 'react';

const AddBook = () => (
  <div className="add-new-book">
    <h1>Add New Book</h1>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
