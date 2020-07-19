import React from 'react';
import styled from 'styled-components';
import Background from '../assets/card-background.svg';
import Card from './Card';

const skillset = [
    { title: 'Frontend stuff', entries: ['JavaScript', 'Angular', 'React', 'React native', 'HTML and CSS' ]},
    { title: 'Backend stuff', entries: ['NodeJs', 'Express', 'MongoDB', 'PostgreSQL' ], transform: 'scale(1.1)'},
    { title: 'Utility stuff', entries: ['Docker', 'Graphql', 'Git', 'Grafana' ], transform: 'translateY(0px)'}
];

const Container = styled.div`
    position: relative;
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;

    &:after {
        content: '';
        position: absolute;
        width: 200%;
        max-width: 200%;
        height: 630px;
        background-image: ${props => props.lightMode ? `url(${Background})` : 'none'};
        /* background-image: url(${Background}); */
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        left: 50%;
        top: 52%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    @media(max-width: 960px) {
        display: block;
        background-image: none;
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
