import './Social.css'
import React, { useState } from 'react';

const FloralSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Twitter',
      icon: 'fa-twitter',
      url: 'https://x.com/ManiMonga5',
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      icon: 'fa-facebook',
      url: 'https://www.facebook.com/mani.monga.1656/',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      url: 'https://www.instagram.com/mani.monga28/',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/mani-monga/',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: 'fa-github',
      url: 'https://github.com/mani-monga',
      color: '#333'
    }
  ];

  return (
    <div className="flower-social">
      <button 
        className={`main-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa fa-share-alt"></i>
      </button>
      
      <div className={`petal-container ${isOpen ? 'open' : ''}`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="petal"
            style={{
              '--index': index,
              '--total': socialLinks.length,
              backgroundColor: social.color
            }}
          >
            <i className={`fa ${social.icon}`}></i>
            <span className="tooltip">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloralSocial;