import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
    font-size: 4rem;
    font-weight: 500;
    color: white;
    letter-spacing: 0.2px;
    margin: 0;
`;

const Introduction = () => {
    return (
        <Container>
            <Text>Hi,</Text>
            <Text>I'm Sid.</Text>
            <Text>Fullstack developer</Text>
        </Container>
    );
};

export default Introduction;