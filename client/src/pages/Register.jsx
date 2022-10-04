import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(inputs);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitting');
    try {
      console.log(inputs);
      const res = await axios.post('/auth/register', inputs);
      console.log(res);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <label>uername</label>
        <input
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <label>pass</label>
        <input
          type='password'
          placeholder='password'
          name='email'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type='submit'>
          Register
        </button>
        <p>Error message</p>
        <span>
          Already got account <Link to='/login'>Login</Link>{' '}
        </span>
      </form>
    </div>
  );
};

export default Register;
