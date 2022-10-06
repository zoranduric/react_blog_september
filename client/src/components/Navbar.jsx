import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Logo from '../images/logo.png';

const Navbar = () => {
  const { currnetUser, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='blog logo' />
        </div>
        <div className='links'>
          <Link className='Link' to='/?cat=art'>
            <h6>Art</h6>
          </Link>
          <Link className='Link' to='/?cat=art'>
            <h6>Animals</h6>
          </Link>
          <Link className='Link' to='/?cat=art'>
            <h6>Food</h6>
          </Link>
          <Link className='Link' to='/?cat=art'>
            <h6>Cinema</h6>
          </Link>
          <span>{currnetUser?.username}</span>
          {currnetUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='Link' to='/login' />
          )}
          <span className='write'>
            <Link className='Link' to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
