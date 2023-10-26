import './Header.css'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar">
      <div className='space'>
      <div className="navbar-item">
      <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>
        DEV@Deakin
      </Link>
        
      </div>
      <div className="navbar-item">
        <div className="ui right aligned category search">
          <div className="ui icon input">
            <SearchBar />
          </div>
          <div className="results"></div>
        </div>
      </div>
      </div>
      <div className='navbar-item buttons'>
      <Link to="/post"className="navbar-item">Post</Link>
      <Link to="/plans" className='navbar-item'>Plans</Link>
      <Link to="/" className="navbar-item">Login</Link>
      </div>
    </div>
  );
}

export default Header;
