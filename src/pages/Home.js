import React from 'react';
import styled from 'styled-components';
import Banners from '../components/Banner';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner = styled(motion.section)`
    position: relative;
    min-height: 100vh;

    @media(max-width: 960px) {
        max-width: 960px;
    }
`;
const BannerContainer = styled.div`
    padding: 0 20%;

    @media(max-width: 960px) {
        padding: 10px;
    }
`;

const Home = () => {
    const [ref, inView] = useInView({
        threshold: 0.3
    });
    return (
        <Banner ref={ref} initial={{opacity: 0}} animate={{opacity:  inView ? 1 : 0 }} transition={{duration: 1}}>
            <BannerContainer>
                <Banners />
            </BannerContainer>
        </Banner>
    );
};

export default Home;
