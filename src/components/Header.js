import './Header.css';
import user from './user.png';

function Header() {
  return (
    <div className="books_header">
      <div className="nav">
        <h3 className="dark_blue">Bookstore CMS</h3>
        <h4 className="gray_title">Books</h4>
        <h4 className="fade_title">Categories</h4>
      </div>
      <div className="profile"><img src={user} alt="user" /></div>
    </div>
  );
}

export default Header;
