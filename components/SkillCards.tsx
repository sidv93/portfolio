import styled from 'styled-components';
import Card from './Card';

const skillset = [
    { title: 'Frontend stuff', entries: ['JavaScript', 'Angular', 'React', 'React native', 'HTML and CSS'] },
    { title: 'Backend stuff', entries: ['NodeJs', 'Express', 'MongoDB', 'PostgreSQL'], transform: 'scale(1.1)' },
    { title: 'Utility stuff', entries: ['Docker', 'Graphql', 'Git', 'Grafana', 'TypeScript', 'Azure'] }
];

const Container = styled.div`
    position: relative;
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;

    @media(max-width: 960px) {
        display: block;
    }
`;


const SkillCard = () => {
    return (
        <Container>
            {
                skillset.map((item, index) => <Card key={String(index)} skill={item} />)
            }
        </Container>
    );
};

export default SkillCard;
