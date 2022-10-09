import React, { useContext, useEffect, useState } from 'react';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const postId = location.pathname.split('/')[2];
  console.log(postId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.image} alt='' />
        <div className='user'>
          <img src={post.userImg} alt='' />
          <div className='info'>
            <span>{post.username} </span>
            <p>Posted {moment(post.date).fromNow} </p>
          </div>
          {currentUser?.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='' />
              </Link>
              <Link>
                <img onClick={handleDelete} src={Delete} alt='' />
              </Link>
            </div>
          )}
        </div>
        <h3>{post.title}</h3>
        <p>
          <p>{post.content}</p>
        </p>
      </div>
      <Menu />
    </div>
  );
};
// 39
export default Single;
