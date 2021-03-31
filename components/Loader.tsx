import styled from 'styled-components';
import { motion } from 'framer-motion';

const transition = { loop: Infinity, duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };

const Container = styled.div`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Parent = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;
const Child = styled(motion.div)`
    height: 100%;
    width: 100%;
    border: 3px solid ${props => props.theme.backgroundColor};
    border-top: 3px solid ${props => props.theme.thoughtTitle};
    border-right: 3px solid ${props => props.theme.thoughtTitle};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
`;

const Cicle = ({ height, width }) => {
    return (
        <Container height={height} width={width}>
            <Parent>
                <Child animate={{ rotate: 360 }} transition={transition} />
            </Parent>
        </Container>
    );
};

export default Cicle;