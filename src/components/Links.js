import { Outlet, Link } from 'react-router-dom';

function Links() {
  return (
    <>
      <div>
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </div>
      <Outlet />
    </>
  );
}
export default Links;
