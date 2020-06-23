import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.theme.buttonTextColor};
    min-width: 250px;
    box-shadow: 0 32px 64px rgba(16,22,65,0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    border-radius: 10px;
    transform: ${props => props.transform ? props.transform : 'translateY(0)'};

    @media(max-width: 960px) {
        transform: none;
        box-shadow: 0px 14px 5px 13px rgba(0,0,0,0.06);
        margin: 20px 0;
    }
`;
const Author = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Fira sans', sans-serif;
    margin: 0;
`;
const ListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
`;
const ListElement = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &:before {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
`;
const Included = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: #626F7F;
    font-size: 1.1rem;
    padding: 5px 0;
    text-align: center;
`;

const Testinomial = ({ skill }) => {
    return (
        <Container transform={skill.transform}>
            <Author>{skill.title}</Author>
            {/* <Text>{skill.text}</Text> */}
            <ListContainer>
                {
                    skill.entries.map((item, index) => {
                        return (
                            <ListElement key={String(index)}>
                                <Included>{item}</Included>
                            </ListElement>
                        )
                    })
                }
            </ListContainer>
        </Container>
    );
};

export default Testinomial;