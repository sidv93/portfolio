import React from 'react';
import styled from 'styled-components';
import Introduction from '../components/Introduction';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 100%;
    padding: 0 80px;
`;

const Home = () => {
    return (
        <Container>
            <Introduction />
        </Container>
    );
};

export default Home;