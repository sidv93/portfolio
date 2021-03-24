import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/theme';
import Image from 'next/image';
import { useRouter } from 'next/router'

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

const Header = () => {
    const { theme, toggleTheme } = useThemeContext();
    const router = useRouter()
    const toHome = () => {
        router.push('/');
    }
    return (
        <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Logos onClick={toHome}>
                <Image src="/assets/sid_logo.svg" alt="Logo" height={50} width={50} priority />
            </Logos>
            <NavlinksContainer onClick={() => toggleTheme()}>
                { theme === 'dark' && <ModeIcon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}><FaSun size="32" color="#FFF" /></ModeIcon>}
                { theme === 'light' && <ModeIcon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}><FaMoon size="32" /></ModeIcon>}
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;
