import styled from 'styled-components';

export const NewsLetterWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    .form {
        width: 100%;
        max-width: var(--fixed-width);
        background: var(--white);
        border-radius: var(--borderRadius);
        box-shadow: var(--shadow-2);
        padding: 2rem 2.5rem;
        margin: 3rem auto;
    }
    .form-label {
        display: block;
        font-size: var(--small-text);
        margin-bottom: 0.5rem;
        text-transform: capitalize;
        letter-spacing: var(--letterSpacing);
    }
    .form-input,
    .form-textarea {
        width: 100%;
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        background: var(--backgroundColor);
        border: 1px solid var(--primary-50);
        font-family: 'Roboto', sans-serif;
    }

    .form-row {
        margin-bottom: 1rem;
    }

    .form-textarea {
        height: 7rem;
    }
    ::placeholder {
        font-family: inherit;
        color: var(--primary-100);
    }
    .form-alert {
        color: var(--red-dark);
        letter-spacing: var(--letterSpacing);
        text-transform: capitalize;
    }
`;
