import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const book = [
    { id: uuidv4(), title: 'Drop Beats Not Bombs', author: 'ANold Bond' },
    {
      id: uuidv4(),
      title: 'Kifo Kisimani',
      author: 'Wala Bin Wala',
    },
    { id: uuidv4(), title: 'Bazuu', author: 'Jeff koinange' },
  ];

  return (
    <div className="book-container">
      <Book book={book} />
      <AddBook />
    </div>
  );
};

export default Books;
