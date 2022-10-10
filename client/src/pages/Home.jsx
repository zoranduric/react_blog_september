import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${category}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className='home'>
      {currentUser ? (
        <p>current user is: {currentUser.username}</p>
      ) : (
        <p>Not logged in</p>
      )}
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.image} alt='' />
            </div>
            <div className='content'>
              <Link className='Link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p> {post.desc} </p>
              <Link to={`/post/${post.id}`}>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
