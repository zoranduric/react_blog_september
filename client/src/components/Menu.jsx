import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = ({ category }) => {
  const [posts, setPosts] = useState([]);
  console.log(`menu ${category}   `);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?category=${category}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log('end of use effect');
  }, [category]);

  return (
    <div className='menu'>
      <h1>Other posts</h1>
      {posts &&
        posts.map((post) => (
          <div className='post' key={post.id}>
            <img src={post.image} alt='' />
            <h2>{post.title}</h2>
            <Link to={`/post/${post.id}`}>
              <button>Read more</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Menu;
