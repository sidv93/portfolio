import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
`;
const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: white;
`;
const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    word-wrap: break-word;
    overflow-wrap: break-word;
    color: white;
`;

const AboutMe = () => {
    return (
        <Container>
            <Title>About me</Title>
            <Text>Professionally connected with the web development industry and information technology for many years.</Text>
        </Container>
    );
};

export default AboutMe;