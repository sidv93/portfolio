import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfilePicture from '../public/assets/profile-picture-small.webp';

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
    height: 250px;
    width: 250px;

    img {
        border-radius: 50%;
    }
`;
const Title = styled(motion.h5)`
    font-family: Fira-Sans Medium;
    font-size: 4.2rem;
    font-weight: 700;
    text-align: center;
    margin: 30px 0;
    color: ${props => props.theme.titleColor};
`;
const Text = styled(motion.p)`
    font-size: 2.6rem;
    font-family: Fira-sans;
    text-align: center;
    color: ${props => props.theme.textColor};
    margin: 5px 0;
`;

const containerVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
        transition: {
            when: 'afterChildren'
        }
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: {
        y: 50,
        opacity: 0
    },
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
                <Image priority
                    src={ProfilePicture} width={250} height={250} alt="Profile picture" />
            </Picture>
            <motion.div variants={containerVariant} initial="hidden" animate="visible">
                <Title variants={item} >Siddharth Venkatesh</Title>
                <Text variants={item} >
                    Fullstack developer at Asteria Aerospace.
                </Text>
                <Text variants={item} >
                    Chennai born, Bangalore made
                </Text>
                <Text variants={item} >
                    <FaHeart color="red" size="24" />
                    &nbsp; Football &nbsp;
                    <FaHeart color="red" size="24" />
                    &nbsp; Arsenal &nbsp;
                    <FaHeart color="red" size="24" />
                </Text>
                <Text variants={item} >
                    Building tools for humans
                </Text>
            </motion.div>
        </Container>
    );
};

export default Banner;
