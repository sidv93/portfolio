import React from 'react';
import styled from 'styled-components';
import SkillCards from '../components/SkillCards';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Container = styled(motion.section)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 30px;

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
const ProfileContainer = styled.div`
    padding: 30px 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 10px;
        display: block;
    }
`;
const Heading = styled.h1`
    font-family: 'Fira sans', sans-serif;
    font-size: 2.6rem;
`;
const Text = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: #626F7F;
    font-size: 1.4rem;
    margin: 10px 0;
`;
const ResumeText = styled.p`
    font-family: 'Fira sans', sans-serif;
    font-size: 1.6rem;
    color: #626F7F;
    padding: 0 10px;
`;
const ChatText = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: #626F7F;
    font-size: 1.4rem;
    margin-top: 50px;
`;
const Hi = styled.a`
    font-size: 5rem;
    font-family: 'Sacramento', cursive;
    color: black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Profile = () => {
    const [ref, inView] = useInView({
        threshold: 0.1
    });
    return (
        <Container ref={ref} initial={{opacity: 0}} animate={{opacity:  inView ? 1: 0}} transition={{duration: 1}}>
            <ProfileContainer>
                <Heading>Profile</Heading>
                <Text>
                    I love everything JavaScript, but also would not mind learning a new stuff, if it means better a better experience.
                </Text>
                <Text>
                    Been working with Angular for the majority of my work life, but I've found a new liking for React over the last year or two.
                </Text>
                <Text>
                    I've also been quite taken by React Native lately. There's some pretty interesting stuff going on there.
                </Text>
                <Text>
                    In terms of backend stuff, I mostly use Express, and MongoDb and PostgreSQL.
                </Text>
                <Text>
                    Here is a small selection of relevant stuff I do.
                </Text>
                <SkillCards />
            </ProfileContainer>
            <ResumeText>
                There is a bit more stuff about me in my <span style={{ fontSize: '2rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>Resume</span>
            </ResumeText>
            <ChatText >
                If you have anything interesting to say idea or just want to chat, I'm always down!
            </ChatText>
            <Hi href="mailto:siddhuv93@gmail.com">Just say hi!</Hi>
        </Container >
    );
};

export default Profile;
