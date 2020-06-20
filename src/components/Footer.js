import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.footer`
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 10%;
        width: 80%;
        background-color: #fff;
        height: 1px;
        opacity: 0.5;
    }
`;
const Icon = styled.div`
    min-width: 80px;
    color: white;
    cursor: pointer;
    opacity: 0.4;
    text-align: center;

    &:hover {
        opacity: 1;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Icon><FontAwesomeIcon icon={faFacebook} size="2x" /></Icon>
            <Icon><FontAwesomeIcon icon={faTwitter} size="2x" /></Icon>
            <Icon><FontAwesomeIcon icon={faGithub} size="2x" /></Icon>
            <Icon><FontAwesomeIcon icon={faLinkedin} size="2x" /></Icon>
            <Icon><FontAwesomeIcon icon={faInstagram} size="2x" /></Icon>
        </Container>
    );
};

export default Footer;