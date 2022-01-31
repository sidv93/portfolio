import styled from 'styled-components';
import { format } from 'date-fns';
import { useThemeContext } from '@context/theme';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 960px) {
        display: block;
    }
`;
const Img = styled.img`
    border-radius: 20px;

    @media(max-width: 960px) {
      display: none;
    }
`;
const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    align-items: flex-start;
    justify-content: center; 
    gap: 10px;

    @media(max-width: 960px) {
        padding-left: 0;
    }
`;
const Title = styled.a`
    font-size: 3.2rem;
    color: ${props => props.systemTheme === 'dark' ? props.theme.thoughtTitle : props.theme.titleColor};
    font-family: Fira-Sans Medium;
    font-weight: 900;

    @media(max-width: 960px) {
        font-size: 2.8rem;
    }
`;
const Subtitle = styled.p`
    font-family: Fira-Sans;
    font-size: 2rem;
    color: ${props => props.theme.textColor};
    margin: 0;

    &::first-letter {
        text-transform: uppercase;
    }

    @media(max-width: 960px) {
        font-size: 1.4rem;
    }
`;

const Post = ({
    post: {
        url,
        cover_image,
        title,
        published_at,
        reading_time_minutes,
    },
}) => {
    const { theme } = useThemeContext();

    return (
        <Container>
            <Img src={cover_image} alt="Cover image" height="100%" width="100%" />
            <TextContent>
                <Title systemTheme={theme} href={url} target="_blank">{title}</Title>
                <Subtitle>{`${format(new Date(published_at), 'do LLLL yyyy')} · ${reading_time_minutes} mins read`}</Subtitle>
            </TextContent>
        </Container>
    );
};

export default Post;
