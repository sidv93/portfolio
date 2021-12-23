import Header from "@components/Header";
import Footer from "@components/Footer";
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { withUrqlClient, } from 'next-urql';
import Title from "@components/Title";
import Thought from "@components/Thought";
import Form from "@components/Form";
import { useQuery, } from "urql";

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled(motion.div)`
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${props => props.theme.backgroundColor};
    min-height: 100vh;
`;
const ThoughtsContainer = styled.div`
    padding: 25px 30%;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media(max-width: 960px) {
        padding: 10px 20px;
    }
`;

const THOUGHTS_QUERY = `
    query {
        thoughts(order_by: {created_at: desc}) {
            id
            text
            title
            created_at
        }
    }
`;

const Thoughts = ({ theme }) => {
    const [result] = useQuery({ query: THOUGHTS_QUERY });
    const { data, fetching, error } = result;
    return (
        <Container
            initial={{
                backgroundColor: theme.backgroundColor
            }}
            animate={{
                backgroundColor: theme.backgroundColor,
                transition
            }}
        >
            <Header />
            <Title title="Thoughts" />
            <Form />
            <ThoughtsContainer>
                {
                    data && data.thoughts.map((thought) => (
                        <Thought
                            key={thought.id}
                            text={thought.text}
                            title={thought.title}
                            date={thought.created_at} />
                    ))
                }
            </ThoughtsContainer>
            <Footer />
        </Container>
    );
};

export default withUrqlClient((_ssrExchange, ctx) => ({
    url: 'https://portfolio-thoughts.hasura.app/v1/graphql',
    fetchOptions: () => {
        const token = 'P4OyKYxyZYpGEVHRIp5xZnuv7NHb990Xx7qnqAmJawyEaJlB3QWn2Smy8vJhF3We';
        return {
            headers: {
                'x-hasura-admin-secret': token,
                'content-type': 'application/json'
            }
        };
    }
}))(withTheme(Thoughts));
