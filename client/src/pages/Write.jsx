import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.content || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || '');

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      console.log(formData);

      const res = await axios.post('/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (event) => {
    event.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            content: value,
            category,
            image: file ? imgUrl : '',
          })
        : await axios.post(`/posts/`, {
            title,
            content: value,
            category,
            image: file ? imgUrl : '',
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
          });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='add'>
      <div className='content'>
        <input
          type='text'
          className='text'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className='editorContainer'>
          <ReactQuill theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b> Status: </b>Draft
          </span>
          <span>
            <b> Visability: </b>Public
          </span>
          <input
            type='file'
            id='file'
            name=''
            onChange={(event) => setFile(event.target.files[0])}
          />
          <label htmlFor='file'></label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              checked={category === 'art'}
              value='art'
              id='art'
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input
              checked={category === 'animals'}
              type='radio'
              name='cat'
              value='animals'
              id='animals'
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor='art'>animals</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='art'
              id='art'
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
