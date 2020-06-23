import React from 'react';
import './App.css';
import Home from './fresh/pages/Home';
import styled from 'styled-components';
import Footer from './fresh/components/Footer';
import Profile from './fresh/pages/Profile';
import Background from './assets/home-background.svg';

const Container = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: auto;
    background-attachment: fixed;
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;

    @media(max-width: 960px) {
      background-position: 80% 0%;
    }
`;

function App() {
  return (
    <Container>
      <Home />
      <Profile />
      <Footer />
    </Container>
  );
}

export default App;
