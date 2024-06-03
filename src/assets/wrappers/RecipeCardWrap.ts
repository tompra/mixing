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
`;
