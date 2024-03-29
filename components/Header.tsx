import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/theme';
import Image from 'next/image';
import { useRouter, Router } from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';

const HeaderContainer = styled(motion.header)`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 10%;

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
    gap: 40px;
`;

const Logos = styled.div`
    cursor: pointer;
`;
const BlogLink = styled(motion.a)`
    font-size: 2.6rem;
    font-family: Fira-sans;
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.titleColor};
    border-style: solid;
    border-width: 0;
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
    Router.onRouteChangeStart = () => {
        console.log('in router change');
        NProgress.start();
    }
    
    Router.onRouteChangeComplete = () => {
        console.log('in router change');
        NProgress.done();
    }
    return (
        <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Logos onClick={toHome}>
                <Image src="/assets/sid_logo.svg" alt="Logo" height={50} width={50} priority />
            </Logos>
            <NavlinksContainer>
                <Link href="/blog">
                    <BlogLink
                        whileHover={{
                            borderBottomWidth: '3px'
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        Blog
                    </BlogLink>
                </Link>
                <div onClick={() => toggleTheme()}>
                    {theme === 'dark' && <ModeIcon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}><FaSun size="32" color="#FFF" /></ModeIcon>}
                    {theme === 'light' && <ModeIcon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}><FaMoon size="32" /></ModeIcon>}
                </div>
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;
