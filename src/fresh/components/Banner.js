import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../../assets/profile-picture.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20%;

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 50px 10px;
    }
`;
const Picture = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    align-self: center;
    border: 1px solid #626F7F;
    box-shadow: 12px 32px 88px rgba(35,46,59,0.24);
`;
const Title = styled.h3`
    font-family: 'Fira sans', sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
    margin-top: 30px;
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-family: 'Fira sans', sans-serif;
    text-align: center;
    color: #626F7F;
    margin: 20px 0;
`;

const Banner = () => {
    return (
        <Container>
            <Picture src={ProfilePicture} alt="profile-picture" />
            <Title>Siddharth Venkatesh</Title>
            <Text>
                I'm a Fullstack developer at Asteria Aerospace.
            </Text>
        </Container>
    );
};

export default Banner;