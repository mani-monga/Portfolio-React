import React from 'react';
import './Download.css';
import pdf from './Mani Monga Resume Dev.pdf'

function Download() {
  return (

    <div className='downloadcontainer'>
      <a href={pdf} rel="noreferrer" target='_blank'>
        <button id="download">
          <svg id="download-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <animateTransform attributeType="XML" attributeName="transform" type="translate" values="0,-3;0,0;0,-3" dur="0.8s" repeatCount="indefinite" />
            </path>
            <rect x="5" y="18" width="14" height="2" rx="1" fill="white" />
          </svg>

          <span>Download CV</span>
        </button>
      </a>
    </div>
  )
}

export default Download