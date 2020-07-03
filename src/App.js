import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import styled from 'styled-components';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Background from './assets/home-background.svg';
import Header from './components/Header';

const Container = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: auto;
    background-attachment: fixed;
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
    /* background-color: rgb(30, 34, 56); */

    @media(max-width: 960px) {
      background-position: 80% 0%;
    }
`;

const App = () => {
  const [mode, setMode] = useState('light');
  return (
    <Container>
      <Header mode={mode} />
      <Home />
      <Profile />
      <Footer />
    </Container>
  );
}

export default App;
