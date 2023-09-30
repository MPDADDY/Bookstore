import React from 'react';

function Categories() {
  const handleClick = () => 'Comming soon';

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
