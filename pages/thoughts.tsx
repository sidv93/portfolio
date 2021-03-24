import Header from "@components/Header";
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import Title from "@components/Title";
import Thought from "@components/Thought";
import Form from "@components/Form";

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

const Thoughts = ({ theme }) => {
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
            <Title />
            <Form />
            <ThoughtsContainer>
                <Thought text="Lorem ipsum is simply dummy text of printing and typesetting industry" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
                <Thought text="testing thoughts" date="24th March 2020" title="First" />
            </ThoughtsContainer>
        </Container>
    );
};

export default withTheme(Thoughts);
