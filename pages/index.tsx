import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import Header from '@components/Header';
import Banner from '@components/Home';
import Profile from '@components/Profile';
import Footer from '@components/Footer';
import { useThemeContext } from '@context/theme';

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled(motion.div)`
    background-image: url('/assets/home-background.svg');
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: auto;
    background-attachment: fixed;
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${props => props.theme.backgroundColor};

    @media(max-width: 960px) {
      background-image: none;
    }
`;

const Home = ({ theme }) => {
    return (
        <Container
            initial={{
                backgroundColor: theme.backgroundColor
            }}
            animate={{
                backgroundColor: theme.backgroundColor,
                transition
            }}
            >
            <Header />
            <Banner />
            <Profile />
            <Footer />
        </Container>
    )
}

export default withTheme(Home);
