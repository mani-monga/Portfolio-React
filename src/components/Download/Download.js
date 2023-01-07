import React from 'react';
import './Download.css';

function Download() {
  return (
    
    <div className='downloadcontainer'>
      <a href="https://drive.google.com/file/d/1z7xhcvjcEqq8L5Lf92AsnClJ26f_WKCs/view?usp=sharing" rel="noreferrer" target='_blank'>
        <button id="download">
          <img width="20px" height="20px" src="https://i.postimg.cc/d0ZXZb9n/downlaod.gif" alt="" />
          <span>Download CV</span>
        </button>
      </a>
    </div>
  )
}

export default Download