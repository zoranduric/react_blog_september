import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <input type='email' placeholder='email' />
        <button type='submit'>Register</button>
        <p>Error message</p>
        <span>
          Already got account <Link to='/login'>Login</Link>{' '}
        </span>
      </form>
    </div>
  );
};

export default Register;
