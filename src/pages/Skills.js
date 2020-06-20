import React from 'react';
import styled from 'styled-components';
import Skill from '../components/Skills';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    height: 100vh;
    padding: 0 10%;
`;

const Skills = () => {
    return (
        <Container>
            <Skill />
        </Container>
    );
};

export default Skills;