import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from '@components/Post';
import Title from '@components/Title';
import { useThemeContext } from '@context/theme';

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled(motion.div)`
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${props => props.theme.backgroundColor};
    min-height: 100vh;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10%;

    @media(max-width: 960px) {
       /* flex-direction: column;
       justify-content: flex-start;
       align-items: flex-start; */
    }
`;

const Views = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;

    @media(max-width: 960px) {
        padding-left: 20px;
    }

    .text {
        font-size: 2.6rem;
        font-family: Fira-sans;
        color: ${props => props.theme.textColor};

        @media(max-width: 960px) {
            font-size: 1.8rem;
            display: none;
        }
    }
    .count {
        font-size: 3.2rem;
        font-family: Fira-Sans Medium;
        color: ${props => props.systemTheme === 'dark' ? props.theme.thoughtTitle : props.theme.titleColor};

        @media(max-width: 960px) {
            font-size: 1.8rem;
            font-family: Fira-Sans;
        }
    }

    .icon {
        display: none;
        color: ${props => props.theme.textColor};
        @media(max-width: 960px) {
            display: inline;
        }
    }
`;

const Blogs = styled.div`
    padding: 50px 10%;
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media(max-width: 960px) {
        padding: 50px 20px;
        padding-bottom: 80px;
    }
`;

const Blog = ({ posts, views, theme }) => {
    const { theme: systemTheme } = useThemeContext();

    return (
        <Container
            initial={{
                backgroundColor: theme.backgroundColor
            }}
            animate={{
                backgroundColor: theme.backgroundColor,
                transition
            }}>
            <Header />
            <TitleContainer>
                <Title title="Posts" />
                <Views systemTheme={systemTheme}>
                    <span className='text'>Total reads:&nbsp;</span>
                    <span className='icon'><AiFillEye size="28" /></span>
                    <span className='count'>{views}</span>
                </Views>
            </TitleContainer>
            <Blogs>

                {
                    posts.map((post) => <Post post={post} key={post.id} />)
                }
            </Blogs>
            <Footer />
        </Container>
    )
};

export async function getServerSideProps() {
    const res = await fetch('https://dev.to/api/articles/me', {
        method: 'GET',
        headers: {
            'api-key': '2owyJ33aENRCBHwNNjTosVjV',
        }
    });
    const posts = await res.json();
    const views = posts.reduce((acc, item) => acc + item.page_views_count, 0);
    
    return {
        props: {
            posts,
            views,
        },
    }
};

export default withTheme(Blog);
