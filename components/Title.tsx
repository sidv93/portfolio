import { useThemeContext } from '@context/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px 10%;

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
    font-family: Fira-Sans;
    color: ${props => props.systemTheme === 'dark' ? props.theme.thoughtTitle : props.theme.titleColor};
    font-size: 3.2rem;
    margin: 10px 0;
`;

const Title = ({ title }) => {
    const { theme } = useThemeContext();

    return (
        <Container>
            <ImgContainer>
                <Image src="/assets/profile-picture-small.webp" alt="Logo" height={50} width={50} priority />
            </ImgContainer>
            <div>
                <Text systemTheme={theme}>{title}</Text>
            </div>
        </Container>
    );
};

export default Title;
