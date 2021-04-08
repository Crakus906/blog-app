import styled from 'styled-components';

export const InputWrapper  = styled.div`
    position: relative;
    .input {
        width: 20rem;
        padding: 0.3rem;
        outline: none;
        margin: 0.5rem 1rem;
        border-radius: 10px;
        border: 1px solid black
    }

    .input__error {
        border: 1px solid red;
    }
    .label {
        margin: 0.5rem 1rem;
    }
    .error {
        position: absolute;
        margin: -0.6rem 1rem;
        font-size: 12px;
        color: red;
    }
`;