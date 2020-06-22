import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 1px;
        background-color: black;
        top: 15px;
        left: 10px;
        opacity: 0.6;
        transform: ${props => props.hovered ? 'translateX(-5px)' : 'translateX(0)'};
    }

    &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 1px;
        background-color: black;
        bottom: 15px;
        left: 10px;
        opacity: 0.6;
        transform: ${props => props.hovered ? 'translateX(-5px)' : 'translateX(0)'};
    }

    @media(max-width: 960px) {
        display: flex;
    }
`;

const NavIcon = styled.div`
    width: 30px;
    height: 2px;
    background-color: black;
    border-radius: 1px;
    opacity: 0.6;
    transform: ${props => props.hovered ? 'translateX(5px)' : 'translateX(0)'};
`;

const Nav = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <Container onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} hovered={hovered}>
            <NavIcon hovered={hovered} />
        </Container>
    );
};

export default Nav;