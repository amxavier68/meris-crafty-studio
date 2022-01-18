import React from 'react';
import { Link } from 'react-router-dom';

// import ArticleImg from '../../../public/img/valentines.png';

const Articles = () => {
  return (
    <section className='cards'>
      
      <div className='card'>
        <div className='card-image'>
          {/* <img src={ArticleImg} alt='product' /> */}
          <span className='img'>{' '}</span>
          <span className='card-title'>Blog Title</span>
          <span className='card-like'><i className="far fa-heart"></i></span>
        </div>
        <div className='card-summary'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio enim ipsum natus expedita, laborum hic sunt 
            asperiores dicta dignissimos incidunt cum? Nostrum accusamus impedit dicta saepe doloribus velit ex!</p>
        </div>
        <button className='btn card-btn'><Link to="/">Read more</Link></button>
      </div>

      <div className='card'>
        <div className='card-image'>
          {/* <img src={ArticleImg} alt='product' /> */}
          <span className='img'>{' '}</span>
          <span className='card-title'>Blog Title</span>
          <span className='card-like'><i className="far fa-heart"></i></span>
        </div>
        <div className='card-summary'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio enim ipsum natus expedita, laborum hic sunt 
            asperiores dicta dignissimos incidunt cum? Nostrum accusamus impedit dicta saepe doloribus velit ex!</p>
        </div>
        <button className='btn card-btn'><Link to="/">Read more</Link></button>
      </div>

      <div className='card'>
        <div className='card-image'>
          {/* <img src={ArticleImg} alt='product' /> */}
          <span className='img'>{' '}</span>
          <span className='card-title'>Blog Title</span>
          <span className='card-like'><i className="far fa-heart"></i></span>
        </div>
        <div className='card-summary'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio enim ipsum natus expedita, laborum hic sunt 
            asperiores dicta dignissimos incidunt cum? Nostrum accusamus impedit dicta saepe doloribus velit ex!</p>
        </div>
        <button className='btn card-btn'><Link to="/">Read more</Link></button>
      </div>

      <div className='card'>
        <div className='card-image'>
          {/* <img src={ArticleImg} alt='product' /> */}
          <span className='img'>{' '}</span>
          <span className='card-title'>Blog Title</span>
          <span className='card-like'><i className="far fa-heart"></i></span>
        </div>
        <div className='card-summary'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio enim ipsum natus expedita, laborum hic sunt 
            asperiores dicta dignissimos incidunt cum? Nostrum accusamus impedit dicta saepe doloribus velit ex!</p>
        </div>
        <button className='btn card-btn'><Link to="/">Read more</Link></button>
      </div>

      <div className='card'>
        <div className='card-image'>
          {/* <img src={ArticleImg} alt='product' /> */}
          <span className='img'>{' '}</span>
          <span className='card-title'>Blog Title</span>
          <span className='card-like'><i className="far fa-heart"></i></span>
        </div>
        <div className='card-summary'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio enim ipsum natus expedita, laborum hic sunt 
            asperiores dicta dignissimos incidunt cum? Nostrum accusamus impedit dicta saepe doloribus velit ex!</p>
        </div>
        <button className='btn card-btn'><Link to="/">Read more</Link></button>
      </div>
      
      <div className='card'>
        <div className='card-image'>
          {/* <img src={ArticleImg} alt='product' /> */}
          <span className='img'>{' '}</span>
          <span className='card-title'>Blog Title</span>
          <span className='card-like'><i className="far fa-heart"></i></span>
        </div>
        <div className='card-summary'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio enim ipsum natus expedita, laborum hic sunt 
            asperiores dicta dignissimos incidunt cum? Nostrum accusamus impedit dicta saepe doloribus velit ex!</p>
        </div>
        <button className='btn card-btn'><Link to="/">Read more</Link></button>
      </div>
    </section>
  )
}

export default Articles;
