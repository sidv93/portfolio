import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Container = styled.header`
    padding: 0 10%;
    min-height: 10vh;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Icon = styled.div`
    min-width: 80px;
    color: white;
    cursor: pointer;
    opacity: 0.4;

    &:hover {
        opacity: 0.7;
    }
`;

const Header = () => {
    const [lightMode, toggleLightMode] = useState(false);
    return (
        <Container>
            <Icon onClick={() => toggleLightMode(!lightMode)}>
                <FontAwesomeIcon icon={lightMode ? faMoon : faSun } size="2x" />
            </Icon>
            <Nav />
        </Container>
    );
};

export default Header;