import React from 'react';

import FeaturedImg from '../../../public/img/featured.png';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured-text'>
        <h1>Welcome to Meri`s Crafty Studio</h1>
        <p>Here you will find handmade personalised products for that special someone.</p>
        <p>These products are made to order - with that personal touch - great for Birthdays, weddings, anniversaries, etc</p>
        <p>I look forward to your support</p>
      </div>
      <div className='featured-image'>
        <img src={FeaturedImg} alt="featured product" />
      </div>
    </div>
  )
}

export default Featured;
