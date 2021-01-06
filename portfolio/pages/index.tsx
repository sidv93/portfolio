import Head from 'next/head'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '@components/Header';
import Banner from '@components/Home';
import Profile from '@components/Profile';
import Footer from '@components/Footer';

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };
const Container = styled(motion.div)`
    background-image: url('/home-background.svg');
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: auto;
    background-attachment: fixed;
    background-color: #FFF;
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;

    @media(max-width: 960px) {
      background-image: none;
    }
`;

export default function Home() {
    return (
        <Container
            lightMode={true}
            animate={{
                backgroundColor: '#FFF',
                transition
            }}>
            <Head>
                <title>Siddharth Venkatesh</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header lightMode={true} toggleMode={() => {}} />
            <Banner lightMode={true} />
            <Profile lightMode={true} />
            <Footer lightMode={true} />
        </Container>
    )
}