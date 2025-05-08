import { Link } from 'react-router-dom';
import { type MouseEvent} from 'react';
import Auth from '../../utils/auth';
import "./Header.css"

const Header = () => {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <Link to="/">
          <h1>
            Project 3
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me">
                View My Profile
              </Link>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
