import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 60%;
        height: 1px;
        background-color: #626F7F;
        margin: 0 20%;
        left: 0;
        top: 0;

        @media(max-width: 960px) {
            width: 80%;
            margin: 0 10%;
        }
    }
`;
const AboutContainer = styled.div`
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 10px;
    }
`;
const Heading = styled.h1`
    font-family: 'Fira sans', sans-serif;
`;
const Text = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: #626F7F;
    font-size: 1.4rem;
    text-align: center;
`;

const About = () => {
    return (
        <Container>
            <AboutContainer>
                <Heading>About me</Heading>
                <Text>
                    I'm a Computer Science graduate from Bangalore, India. Now a fullstack developer at Asteria Aerospace. I've been building web and mobile apps for almost 5 years now. Previously, I was a Software Engineer at Aricent technologies.
                    
           </Text>
            </AboutContainer>
        </Container>
    );
};

export default About;