import styled from 'styled-components';

export const SearchWrapper = styled.div`
    margin-bottom: 2rem;
    .form {
        display: grid;
        grid-template-columns: 1fr auto;
        max-width: var(--fixed-width);
        box-shadow: var(--shadow-2);
        padding: 2rem 2.5rem;
        margin: 3rem auto;
        background-color: var(--primary-200);
        border-radius: 10px;
    }
    .form-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 2.5rem;
        padding: 0.375rem 0.75rem;
        border-radius: var(--borderRadius);
        background: var(--backgroundColor);
        border: 1px solid var(--primary-100);
        font-family: 'Roboto', sans-serif;
    }
    .btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;
