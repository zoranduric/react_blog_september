import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from '../images/logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='blog logo' />
          </Link>
        </div>
        <div className='links'>
          <Link className='Link' to='/?category=art'>
            <h6>Art</h6>
          </Link>
          <Link className='Link' to='/?category=animals'>
            <h6>Animals</h6>
          </Link>
          <Link className='Link' to='/?category=food'>
            <h6>Food</h6>
          </Link>
          <Link className='Link' to='/?category=cinema'>
            <h6>Cinema</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='link' to='/login'>
              Login
            </Link>
          )}
          <span className='write'>
            <Link className='link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
