import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/sv_logo.png'
import Nav from './Nav';

const HeaderContainer = styled.header`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;

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

const SecLink = styled.a`
    font-size: 1rem;
    color: ${props => props.theme.linkColor};
    font-family: 'Fira Sans', sans-serif;
    text-decoration: none;
    font-weight: 600;
    margin: 0 30px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #2174EA
    }
`;
const Logos = styled.img`
    height: 50px;
    width: 50px;
    cursor: pointer;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logos src={Logo} alt="logo" />
            <NavlinksContainer>
                <SecLink>Home</SecLink>
                <SecLink>profile</SecLink>
            </NavlinksContainer>
            <Nav />
        </HeaderContainer>
    );
};

export default Header;
