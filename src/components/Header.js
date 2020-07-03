import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/sv_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 20%;

    @media(max-width: 960px) {
        margin: auto;
        max-width: 960px;
        padding: 10px;
    }
`;

const NavlinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 960px) {
        display: none;
    }
`;

const Logos = styled.img`
    height: 50px;
    width: 50px;
    cursor: pointer;
`;
const ModeIcon = styled.div`
    cursor: pointer;
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }
`;

const Header = ({mode}) => {
    return (
        <HeaderContainer initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
            <Logos src={Logo} alt="logo" />
            <NavlinksContainer>
                {mode === 'dark' && <ModeIcon><FontAwesomeIcon icon={faSun} size="2x" /></ModeIcon> }
                {mode === 'light' && <ModeIcon><FontAwesomeIcon icon={faMoon} size="2x" /></ModeIcon> }
            </NavlinksContainer>
            <Nav />
        </HeaderContainer>
    );
};

export default Header;
