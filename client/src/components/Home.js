import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Image, Container } from 'semantic-ui-react';

const Home = () => (
  <div>
    <Container style={{display: 'flex', marginTop: '30px'}}>
      <Header as="h1" textAlign="center">
        Welcome to
      </Header>
      <Header style={{marginTop: '100px', border: '5px solid black', borderRadius: '50%'}}>
        <Image style={{ height: '400px', width: '400px' }} src={require('../images/blog_word_pic.jpg')} alt="logo"></Image>
        <Image style={{ height: '400px', width: '400px' }} src={require('../images/jam_pic.jpg')} alt="logo 2"></Image>
      </Header>
      <Link style={{fontSize: '20px'}} to="/blogs">Go to blog posts</Link>
    </Container>
  </div>
);

export default Home;