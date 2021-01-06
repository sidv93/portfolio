import styled from 'styled-components';
import SkillCards from '@components/SkillCards';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Container = styled(motion.section)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 30px;

    &:before {
        content: '';
        position: absolute;
        width: 60%;
        height: 1px;
        background-color: #626F7F;
        margin: 0 20%;
        left: 0;
        top: 0;

        @media(max-width: 960px) {
            width: 80%;
            margin: 0 10%;
        }
    }

    @media(max-width: 960px) {
            margin: 0 20px;
        }
`;
const ProfileContainer = styled.div`
    padding: 30px 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 10px;
        display: block;
    }
`;
const Heading = styled.h1`
    font-family: 'Fira sans', sans-serif;
    font-size: 4rem;
    color: ${props => props.theme.titleColor};
`;
const Text = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: ${props => props.theme.textColor};
    font-size: 2.4rem;
    margin: 10px 0;
`;
const ResumeText = styled.p`
    font-family: 'Fira sans', sans-serif;
    font-size: 2.4rem;
    color: #626F7F;
    padding: 0 10px;
`;
const ChatText = styled.p`
    font-family: 'Fira sans', sans-serif;
    color: #626F7F;
    font-size: 2.2rem;
    margin-top: 50px;
`;
const Hi = styled.a`
    font-size: 8rem;
    font-family: 'Sacramento', cursive;
    color: black;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.textColor};

    &:hover {
        text-decoration: underline;
    }
`;

const Profile = ({ lightMode }: { lightMode: boolean }) => {
    const [ref, inView] = useInView({
        threshold: 0.1
    });
    const [textRef, textInView] = useInView({
        threshold: 0.3
    });
    const downloadResume = () => {
        window.open('/SiddharthVenkatesh.pdf', '_blank');
    }
    return (
        <Container ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 1 }}>
            <ProfileContainer>
                <Heading>Profile</Heading>
                <motion.div ref={textRef} initial={{ opacity: 0 }} animate={{ opacity: textInView ? 1 : 0 }} transition={{ duration: 1 }}>
                    <Text>
                        I love everything JavaScript, and most of my work revolves around it.
                    </Text>
                    <Text>
                        Been working with Angular for the majority of my work life, and I've found a new liking for React over the last year or two.
                    </Text>
                    <Text>
                        I have taken up React Native in the past few months and loving it so far.
                    </Text>
                    <Text>
                        I also enjoy designing and developing backend APIs. Been building APIs with Express and MongoDB for years now.
                    </Text>
                    <Text>
                        GraphQL is also something I've come to love and appreciate in the past year.
                    </Text>
                    <Text>
                        My latest fascination is micro-interactions and animations, and I've taken it as a hobby to come up with slick transitions.
                    </Text>
                    <Text style={{ marginTop: '50px' }}>
                        Here is a small selection of relevant stuff I do
                    </Text>
                </motion.div>
                <SkillCards lightMode={lightMode} />
            </ProfileContainer>
            <ResumeText>
                There is a bit more stuff about me in my
                &nbsp;
                <span onClick={downloadResume} style={{ fontSize: '4rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', color: '#626F7F' }}>Resume</span>
            </ResumeText>
            <ChatText >
                If you have anything interesting to say idea or just want to chat, I'm always down!
            </ChatText>
            <Hi href="mailto:siddhuv93@gmail.com">Say hi!</Hi>
        </Container >
    );
};

export default Profile;
