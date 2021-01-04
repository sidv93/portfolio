import styled from 'styled-components';
import Image from 'next/image';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
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
        padding: 20px;
    }
`;

const NavlinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 960px) {
        /* display: none; */
    }
`;

const Logos = styled.div`
    cursor: pointer;
`;
const ModeIcon = styled(motion.div)`
    cursor: pointer;
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }
`;

const Header = ({lightMode, toggleMode}) => {
    return (
        <HeaderContainer initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
            <Logos>
                <Image src="/sid_logo.svg" alt="Logo" height="50" width="50" />
            </Logos>
            <NavlinksContainer>
                {!lightMode && <ModeIcon initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}} onClick={() => toggleMode(true)}><FaSun color="#FFF" size="24" /></ModeIcon> }
                {lightMode && <ModeIcon initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}} onClick={() => toggleMode(false)}><FaMoon size="24" /></ModeIcon> }
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;
