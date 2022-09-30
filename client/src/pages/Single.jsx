import React from 'react';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className='info'>
            <span>Peter</span>
            <p> Posted 2h ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='' />
            </Link>
            <Link>
              <img src={Delete} alt='' />
            </Link>
          </div>
        </div>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        </h3>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quis reiciendis mollitia molestias repudiandae illo modi deleniti
            corrupti illum, commodi assumenda dolorum voluptate, veniam quisquam
            in, quia aperiam libero qui!
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};
// 39
export default Single;
