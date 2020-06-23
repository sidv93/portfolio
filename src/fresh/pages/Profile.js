import React from 'react';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';

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
const ProfileContainer = styled.div`
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
const Skills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;
const Profile = () => {
    return (
        <Container>
            <ProfileContainer>
                <Heading>Profile</Heading>
                <Text>
                    I love everything JavaScript, but also would not mind learning a new stuff, if it means better a better experience.
                    Been working with Angular for the majority of my work life, but I've found a new liking for React over the last year or two.
                    I've also been quite taken by React Native lately. There's some pretty interesting stuff going on there.
                    In terms of backend stuff, I mostly use Express, and MongoDb and PostgreSQL.

                    Here is a small selection of relevant stuff I do.
                </Text>
                <SkillCard />
            </ProfileContainer>
        </Container>
    );
};

export default Profile;