import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 100%;
    padding: 0 80px;
`;

const About = () => {
    return (
        <Container>
            <AboutMe />
        </Container>
    );
};

export default About;