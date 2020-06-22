import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Home from './fresh/pages/Home';
import styled from 'styled-components';
import About from './fresh/pages/About';
import Skills from './pages/Skills';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './fresh/components/Footer';
import Profile from './fresh/pages/Profile';
// import Header from './fresh/components/Header';
import Background from './assets/home-background.svg';

const Container = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: auto;
    background-attachment: fixed;
`;

function App() {
  let config = {
    num: [4, 7],
    rps: 0.8,
    radius: [5, 30],
    life: [1.5, 13],
    v: [0.1, 0.1],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["#08fdd8"],
    cross: "dead",
    random: 15
  };
  return (
    <Container>
      {/* <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> */}
      {/* <Header />
      <Home />
      <About />
      <Skills />
      <Footer />
      <ParticlesBg type="custom" config={config} bg={true} /> */}
      <Home />
      <About />
      <Profile />
      <Footer />
    </Container>
  );
}

export default App;
