import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const status = useSelector(checkStatus);
  const handleClick = () => `Status: ${status}`;

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
