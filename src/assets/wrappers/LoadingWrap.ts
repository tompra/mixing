import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    width: 6rem;
    height: 6rem;
    border: 5px solid var(--primary-100);
    border-radius: 50%;
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
    margin: 8rem auto;

    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }
`;
