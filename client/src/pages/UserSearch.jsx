import { useState } from 'react';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setUsername((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(username);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitting search request');
    console.log(username);
  };

  return (
    <div>
      <div>
        <h1>User search</h1>
      </div>
      <form>
        <label htmlFor=''>username</label>
        <input
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit} type='submit'>
          Search
        </button>
      </form>
      <p>-></p> {user && <p>{user}</p>}
    </div>
  );
};

export default UserSearch;
