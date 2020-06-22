import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/sv_logo.png'

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
    font-family: ${props => props.theme.sectionFontFamily};
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

const Header = () => {
    const history = useHistory();
    return (
        <HeaderContainer>
            <img src={Logo} style={{ height: '50px', width: '50px', cursor: 'pointer' }} alt="logo" />
            <NavlinksContainer>
                <SecLink onClick={() => history.push('/frame')}>Home</SecLink>
                <SecLink onClick={() => history.push('/twist')}>about</SecLink>
                <SecLink onClick={() => history.push('/tidy')}>profile</SecLink>
                <SecLink onClick={() => history.push('/sketch')}>contact</SecLink>
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;