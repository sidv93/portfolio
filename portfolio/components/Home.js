import styled from 'styled-components';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 15%;

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 50px 10px;
    }
`;
const Picture = styled(motion.div)`
    border-radius: 50%;
    align-self: center;
    border: 2px solid #FFF;
    box-shadow: 12px 32px 88px rgba(35,46,59,0.24);

    img {
        border-radius: 50%;
    }
`;
const Title = styled.h3`
    font-family: 'Fira sans', sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    text-align: center;
    margin: 30px 0;
    color: ${props => props.theme.titleColor}
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-family: 'Fira sans', sans-serif;
    text-align: center;
    color: ${props => props.theme.textColor};
    margin: 5px 0;
`;
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Banner = () => {
    return (
        <Container>
            <Picture initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <Image src="/profile-picture.jpg" width={250} height={250} alt="Profile picture" />
                </Picture>
            <motion.div variants={container} initial="hidden" animate="visible">
                <Title variants={item}>Siddharth Venkatesh</Title>
                <Text variants={item}>
                    Fullstack developer at Asteria Aerospace.
                </Text>
                <Text variants={item}>
                    Chennai born, Bangalore made, INFP
                </Text>
                <Text variants={item}>
                    <FaHeart color="red" size="24" />
                    &nbsp; Football &nbsp;
                    <FaHeart color="red" size="24" />
                    &nbsp; Arsenal &nbsp;
                    <FaHeart color="red" size="24" />
                </Text>
                <Text variants={item}>
                    Building tools for humans
                </Text>
            </motion.div>
        </Container>
    );
};

export default Banner;
