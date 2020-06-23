import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* min-height: 100vh; */
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

    @media(max-width: 960px) {
            margin: 0 20px;
        }
`;
const AboutContainer = styled.div`
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 10px;
    }
`;
const Text = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: #626F7F;
    font-size: 1.4rem;
    /* text-align: center; */
`;
const Hi = styled.a`
    font-size: 2rem;
    font-family: 'Fira sans', sans-serif;
    text-decoration: underline;
    font-family: 'Indie Flower', cursive;
`;

const About = () => {
    return (
        <Container>
            <AboutContainer>
                {/* <Heading>About me</Heading> */}
                <Text>
                    If you have anything interesting idea or just want to chat, I'm always down!
                </Text>
                <Hi>Just say hi</Hi>
            </AboutContainer>
        </Container>
    );
};

export default About;