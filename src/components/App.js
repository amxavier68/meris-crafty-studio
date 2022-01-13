import React from 'react';
import styled from 'styled-components';

import Grinch from '../../public/img/grinch.png';

// Pages
import BlogContent from '../pages/Blog';

const Hero = styled.div`
  display: flex;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  padding 30px 0;
  margin: 30px;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
`;

const Card = styled.div`
  display: block;
  width: 50%;
  padding: 20px 0;
  height: 350px;
  margin: 20px 0;
  border: 0;
`;

const Image = styled.img`
  display: block;
  background: url(${Grinch});
  background-position: center center;
  background-size: 50%;
  background-repeat: no-repeat;
  height: 350px;
  width: 50%;
  padding: 20px 0;
  margin: 20px 0;
  border-radius: 50%;
`;
  
const H1 = styled.h1`
  font-size: 48pt;
  font-weight: bold;
  font-style: italic;
  color: hotpink;
`;

const Section = styled.section`
width: 80%;
`;

const App = () => {
  return (
    <div className='container'>
      <Hero>
        <Card>
        <div className="card border-0">
          <div className="card-body border-0">
            <H1>
              Welcome to Meri's Crafty Studio
            </H1>
            <h1 className="card-title"></h1>
            <p className="card-text">Here you will find handmade personalised products for that special someone.</p>
            <p className="card-text">These products are made to order - with that personal touch - great for Birthdays, weddings, anniversaries, etc</p>
            <p className="card-text">I look forward to your support</p>
          </div>
        </div>
        </Card>
        <Image />
      </Hero>
      <Section>
        <BlogContent />
      </Section>
      
    </div>
  )
}

export default App;
