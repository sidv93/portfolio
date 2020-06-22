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

const Profile = () => {
    return (
        <Container>
            <ProfileContainer>
                <Heading>Profile</Heading>
                <Text>
                    You can also call me a product designer, experience designer, interaction, UI, UX or by any other market defined function-title. I prefer to keep learning, continue challenging myself, and do interesting things that matter. My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
                    I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ. I currently work remotely and have a full-time commitment at InVision. Outside of my commitments I work with a select freelance client base. Feel free to get in touch by any means of communication.
           </Text>
            </ProfileContainer>
        </Container>
    );
};

export default Profile;