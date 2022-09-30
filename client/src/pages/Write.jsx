import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' className='text' />
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
          <input className='file' type='file' id='file' />
          <label htmlFor='file'></label>
          <div className='buttons'>
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
