import styled from 'styled-components';

export const RecipeCardWrapper = styled.article`
    width: 45%;
    background: var(--white);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 3rem 1rem;
    border-radius: var(--borderRadius);

    .footer-title {
        width: 75%;
    }

    img {
        height: 15rem;
        width: 100%;
        border-top-left-radius: var(--borderRadius);
        border-top-right-radius: var(--borderRadius);
    }
    .footer {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width: 1200px) {
        width: 60%;
    }

    @media (max-width: 992px) {
        width: 75%;
    }

    @media (max-width: 768px) {
        width: 90%;
        margin: 2rem 1rem;

        img {
            height: 12rem;
        }

        .footer {
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
        }

        .footer-title {
            width: 100%;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 576px) {
        width: 100%;
        margin: 1rem 0;

        img {
            height: 10rem;
        }
    }
`;
