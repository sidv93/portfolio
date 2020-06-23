import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/card-background.svg';
import Testimonial from './Testimonial';

const skillset = [
    { title: 'Frontend stuff', entries: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'React native' ]},
    { title: 'Backend stuff', entries: ['NodeJs', 'Express', 'MongoDB', 'PostgreSQL' ], transform: 'translateY(50px)'},
    { title: 'Utility stuff', entries: ['Docker', 'Graphql', 'Git' ], transform: 'translateY(-50px)'}
];

const Container = styled.div`
    position: relative;
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
    gap: 25px;

    &:after {
        content: '';
        position: absolute;
        width: 200%;
        max-width: 200%;
        height: 630px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        left: 50%;
        top: 52%;
        transform: translate(-50%, -50%);
        z-index: -2;
    }
`;


const SkillCard = () => {
    return (
        <Container>
            {
                skillset.map((item, index) => <Testimonial key={String(index)} skill={item} />)
            }
            {/* <Testimonial key={String(0)} skill={skillset[0]} /> */}
            {/* <Testimonial key={String(1)} skill={skillset[1]} />
            <Testimonial key={String(2)} skill={skillset[2]} /> */}
        </Container>
    );
};

export default SkillCard;