import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Banners from '../components/Banner';

const Banner = styled.section`
    position: relative;
    min-height: 100vh;

    @media(max-width: 960px) {
        max-width: 960px;
    }
`;
const BannerContainer = styled.div`
    padding: 0 20%;
    font-family: ${props => props.theme.fontFamily}, sans-serif;

    @media(max-width: 960px) {
        padding: 10px;
    }
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