import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px 30%;

    @media(max-width: 960px) {
        padding: 10px 20px;
    }
`;

const ImgContainer = styled.div`
    height: 50px;
    width: 50px;
    
    img {
        border-radius: 50%;
    }
`;

const Text = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: ${props => props.theme.textColor};
    font-size: 3.2rem;
    margin: 10px 0;
`;

const Title = () => {
    return (
        <Container>
            <ImgContainer>
                <Image src="/assets/profile-picture-small.webp" alt="Logo" height={50} width={50} priority />
            </ImgContainer>
            <div>
                <Text>
                    Thoughts
                </Text>
            </div>
        </Container>
    );
};

export default Title;
