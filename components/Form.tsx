import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'urql';

const Container = styled.div`
    padding: 25px 30%;

    @media(max-width: 960px) {
        padding: 10px 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 40px 0 20px 0;

        input {
            border: none;
            outline: none;
            font-family: 'Fira sans', sans-serif;
            font-size: 2.4rem;
            color: ${props => props.theme.textColor};
            background-color: inherit;
            padding: 12px 8px;
            box-shadow: 0 0 3pt 0 ${props => props.theme.thoughtTitle};
        }

        textarea {
            border: none;
            outline: none;
            font-family: 'Fira sans', sans-serif;
            font-size: 2rem;
            color: ${props => props.theme.textColor};
            background-color: inherit;
            padding: 12px 8px;
            min-height: 150px;
            box-shadow: 0 0 3pt 0 ${props => props.theme.textColor};
        }

        div {
            display: flex;
            justify-content: flex-end;
            gap: 25px;

            .save {
                font-size: 1.6rem;
                padding: 5px 16px;
                background-color: inherit;
                box-shadow: 0 0 3pt 0 ${props => props.theme.thoughtTitle};
                border: none;
                color: ${props => props.theme.thoughtTitle};
                border-radius: 4px;
                cursor: pointer;

                &:focus {
                    outline: none;
                    box-shadow: 0 0 3pt 1pt ${props => props.theme.thoughtTitle};
                }
            }

            .reset {
                font-size: 1.6rem;
                padding: 5px 16px;
                background-color: inherit;
                border: none;
                box-shadow: 0 0 3pt 0 ${props => props.theme.textColor};
                color: ${props => props.theme.textColor};
                border-radius: 4px;
                cursor: pointer;

                &:focus {
                    outline: none;
                    box-shadow: 0 0 3pt 1pt ${props => props.theme.textColor};
                }
            }
        }
    }
`;

const THOUGHTS_MUTATION = `
    mutation($title: String!, $text: String!) {
        insert_thoughts(objects: {text: $text, title: $title}) {
            returning {
                id
                text
                title
                created_at
            }
        }
    }
`;

const Form = () => {
    const [addThoughtResult, addThought] = useMutation(THOUGHTS_MUTATION);

    const [thought, setThought] = useState({
        title: '',
        text: ''
    });
    const onChange = ({ target: { name, value } }) => {
        setThought({
            ...thought,
            [name]: value
        });
    };
    const reset = () => {
        setThought({
            title: '',
            text: ''
        });
    };
    const submit = async (e) => {
        e.preventDefault();
        await addThought({
            title: thought.title,
            text: thought.text
        });
        reset();
    };

    return (
        <Container>
            <form action="" onSubmit={submit}>
                <input type='text' name='title' required placeholder='Title' value={thought.title} onChange={onChange} />
                <textarea name='text' required placeholder='Thoughts?' value={thought.text} onChange={onChange} />
                <div>
                    <button type='button' className='reset' onClick={reset}>Reset</button>
                    <button type='submit' className='save'>Save</button>
                </div>
            </form>
        </Container>
    );
};

export default Form;