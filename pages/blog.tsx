import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from '@components/Post';
import Title from '@components/Title';

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled(motion.div)`
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${props => props.theme.backgroundColor};
    min-height: 100vh;
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

const Blog = ({ posts, theme }) => {
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
            <Title title="Posts" />
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
    
    return {
        props: {
            posts,
        },
    }
};

export default withTheme(Blog);
