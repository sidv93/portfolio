import styled from 'styled-components';

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
`;

const Thought = ({ title, date, text }: ThoughtProps) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Date>
                {date}
            </Date>
            <Text>
                {text}
            </Text>
        </Container>
    );
};

export default Thought;
