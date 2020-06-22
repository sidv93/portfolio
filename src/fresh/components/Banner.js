import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../assets/profile-picture.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20%;
`;
const Picture = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    align-self: center;
    border: 1px solid #626F7F;
    box-shadow: 12px 32px 88px rgba(35,46,59,0.24);
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-family: 'Fira sans', sans-serif;
    text-align: center;
    color: #626F7F;
    margin: 50px 0;
`;

const Banner = () => {
    return (
        <Container>
            <Picture src={ProfilePicture} alt="profile-picture" />
            <Text>Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua enim adipiscing elit, sed do ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua enim adipiscing elit, sed do ad minim veniam.
            </Text>
        </Container>
    );
};

export default Banner;