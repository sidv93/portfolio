import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    height: 100vh;
    padding: 0 10%;
`;

const About = () => {
    return (
        <Container>
            <AboutMe />
        </Container>
    );
};

export default About;