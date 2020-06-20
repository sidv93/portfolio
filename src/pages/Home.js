import React from 'react';
import styled from 'styled-components';
import Introduction from '../components/Introduction';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 90vh;
    height: 90vh;
    padding: 0 10%;
`;

const Home = () => {
    return (
        <Container>
            <Introduction />
        </Container>
    );
};

export default Home;