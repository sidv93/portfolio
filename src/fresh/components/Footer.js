import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Background from '../../assets/footer-illustration.svg';

const FooterContainer = styled.footer`
    padding: 25px 180px;
    min-height: 15vh;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        bottom: 0;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
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
const FooterSection = () => {
    return (
        <FooterContainer>
            <SocialsContainer>
                <img src={Logo} style={{ height: '30px', width: '30px', opacity: '0.6', cursor: 'pointer' }} alt="logo" />
                <SocialContainer>
                    <Icon><FontAwesomeIcon icon={faFacebook} size="lg" /></Icon>
                    <Icon><FontAwesomeIcon icon={faTwitter} size="lg" /></Icon>
                    <Icon><FontAwesomeIcon icon={faGithub} size="lg" /></Icon>
                    <Icon><FontAwesomeIcon icon={faLinkedin} size="lg" /></Icon>
                    <Icon><FontAwesomeIcon icon={faInstagram} size="lg" /></Icon>
                </SocialContainer>
            </SocialsContainer>
        </FooterContainer>
    );
};

export default FooterSection;
