import React from 'react';
import ReactTyped from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Web Development and website promotions </h1>
        <ReactTyped
          className='typed-text'
          strings={[
            'Web Development',
            'Website Promotions',
            'Web Design',
            'Facebook Ads',
            'Google Ads',
          ]}
          typeSpeed={100}
          backSpeed={60}
          loop
        />
        <a href='#' className=' btn-main-offer'>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
