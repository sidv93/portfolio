import React, { useState } from 'react';
import Home from './pages/Home';
import styled from 'styled-components';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Background from './assets/home-background.svg';
import Header from './components/Header';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const lightTheme = {
  titleColor: '#232E3B',
  textColor: '#626F7F'
}
const darkTheme = {
  titleColor: '#FFF',
  textColor: '#626F7F'
}

const Container = styled(motion.div)`
    background-image: ${props => props.lightMode ? `url(${Background})` : 'none'};
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: auto;
    background-attachment: fixed;
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;

    @media(max-width: 960px) {
      background-image: none;
    }
`;

const App = () => {
  const [lightMode, toggleMode] = useState(true);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <Container lightMode={lightMode}
        animate={{
          backgroundColor: lightMode ? '#FFF' : 'rgb(30, 34, 56)',
          transition
        }}>
        <Header lightMode={lightMode} toggleMode={toggleMode} />
        <Home lightMode={lightMode} />
        <Profile lightMode={lightMode} />
        <Footer lightMode={lightMode} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
