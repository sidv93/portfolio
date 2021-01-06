import styled from 'styled-components';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useThemeContext } from '@context/theme';

const socials = {
    facebook: 'https://www.facebook.com/siddharth.venkatesh.5',
    twitter: 'https://twitter.com/sid_v12',
    github: 'https://github.com/sidv93',
    linkedIn: 'https://www.linkedin.com/in/siddharth-venkatesh-b3a886ba/',
    instagram: 'https://www.instagram.com/sid.venkatesh/'
};

const FooterContainer = styled(motion.footer)`
    padding: 25px 20%;
    min-height: 15vh;
    position: relative;

    @media(max-width: 960px) {
        padding: 10px;
        padding-bottom: 80px;
    }

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

    &:after {
        content: '';
        position: absolute;
        width: 20%;
        height: 100px;
        background-image: url('/assets/footer-illustration.svg');
        background-repeat: no-repeat;
        background-size: auto;
        left: 48%;
        bottom: 0;
        background-position: center top;
        transform: translate(-50%);
        z-index: 2;
        opacity: ${props => !props.lightMode ? 0.1 : 1};

        @media(max-width: 960px) {
            left: 47%;
            width: 100%
        }
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    @media(max-width: 960px) {
        flex-direction: column;
    }
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    align-items: center;

    @media(max-width: 960px) {
        margin: 30px 0;
    }
`;

const Icon = styled.div`
    color: #4346DE;
    cursor: pointer;
    opacity: 0.7;
    text-align: center;

    &:hover {
        opacity: 1;
    }
`;

const Logo = styled.div`
    height: 100px;
    width: 100px;
    cursor: pointer;
`;

const FooterSection = () => {
    const { theme } = useThemeContext();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const open = (url) => {
        window.open(url, '_blank');
    }
    return (
        <FooterContainer lightMode={theme === 'light'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <SocialsContainer>
                <Logo onClick={scrollToTop}>
                    <Image src={'/assets/sid_logo_text.svg'} alt="logo" height="100" width="100" />
                </Logo>
                <SocialContainer>
                    <Icon onClick={() => open(socials.facebook)}><FaFacebook size="24" /></Icon>
                    <Icon onClick={() => open(socials.twitter)}><FaTwitter size="24" /></Icon>
                    <Icon onClick={() => open(socials.github)}><FaGithub size="24" /></Icon>
                    <Icon onClick={() => open(socials.linkedIn)}><FaLinkedin size="24" /></Icon>
                    <Icon onClick={() => open(socials.instagram)}><FaInstagram size="24" /></Icon>
                </SocialContainer>
            </SocialsContainer>
        </FooterContainer>
    );
};

export default FooterSection;
