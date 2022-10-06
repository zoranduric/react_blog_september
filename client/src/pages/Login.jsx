import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',

    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(inputs);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitting');
    try {
      console.log(inputs);
      await login(inputs);
      console.log(currentUser);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
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
        <button onClick={handleSubmit} type='submit'>
          Login
        </button>
        {error && <p>{error}</p>}
        <span>
          Already got account <Link to='/login'>Login</Link>{' '}
        </span>
      </form>
    </div>
  );
};

export default Login;
