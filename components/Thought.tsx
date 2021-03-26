import styled from 'styled-components';
import { format } from 'date-fns';

interface ThoughtProps {
    title: string;
    date: string;
    text: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const Title = styled.h1`
    font-family: 'Fira sans', sans-serif;
    font-size: 4rem;
    color: ${props => props.theme.thoughtTitle};
    margin: 0;

    &::first-letter {
        text-transform: uppercase;
    }
`;
const Date = styled.p`
    font-family: 'Fira sans', sans-serif;
    font-size: 1.6rem;
    color: ${props => props.theme.textColor};
    margin: 0;
`;
const Text = styled.p`
    font-family: 'Fira sans', sans-serif;
    font-size: 2rem;
    color: ${props => props.theme.textColor};
    margin: 0;

    &::first-letter {
        text-transform: uppercase;
    }
`;

const Thought = ({ title, date, text }: ThoughtProps) => {
    const d = new window.Date(date);
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Date>
                {format(d, 'do LLLL yyyy')}
            </Date>
            <Text>
                {text}
            </Text>
        </Container>
    );
};

export default Thought;
