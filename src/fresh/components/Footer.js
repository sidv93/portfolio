import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Background from '../../assets/footer-illustration.svg';
import FullLogo from '../../assets/logo_full.png';

const FooterContainer = styled.footer`
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

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 52%;
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

    @media(max-width: 960px) {
        flex-direction: column;
    }
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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

const Logo = styled.img`
    height: 100px;
    width: 200px;
    cursor: pointer;

    @media(max-width: 960px) {

    }
`;

const FooterSection = () => {
    return (
        <FooterContainer>
            <SocialsContainer>
                <Logo src={FullLogo} alt="logo" />
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
