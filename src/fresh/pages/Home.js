import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Background from '../../assets/home-background.svg';
import Banners from '../components/Banner';

const Banner = styled.section`
    position: relative;
    min-height: 100vh;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 100%;
        height: 100%;
        /* background-image: url(${Background}); */
        background-repeat: no-repeat;
        background-size: auto;
        /* background-attachment: fixed; */
        left: 50%;
        top: 0;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;
const BannerContainer = styled.div`
    padding: 0 20%;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
`;

const Home = () => {
    return (
        <Banner>
            <BannerContainer>
                <Header />
                <Banners />
            </BannerContainer>
        </Banner>
    );
};

export default Home;