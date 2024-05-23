import styled from 'styled-components';

export const RecipeCardWrapper = styled.article`
    background: var(--white);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 3rem 0;
    border-radius: var(--borderRadius);
    :hover {
        box-shadow: var(--shadow-4);
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
