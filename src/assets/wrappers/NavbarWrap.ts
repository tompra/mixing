import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    background-color: var(--primary-600);
    .nav-center {
        width: 90%;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 1.5rem 2rem;
    }
    .logo {
        font-size: clamp(1.5rem, 3vw, 3rem);
        color: var(--primary-100);
        font-weight: 600;
        letter-spacing: 2px;
        font-family: 'Roboto', sans-serif;
    }
    .logo-right {
        background-color: var(--active);
        border-radius: 5px;
        margin-left: 5px;
        padding: 0 10px;
    }
    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
        font-family: 'Roboto', sans-serif;
    }
    .nav-link {
        color: var(--primary-200);
        padding: 0.5rem 0.5rem 0.5rem 0;
        letter-spacing: 2px;
    }
    .nav-link:hover {
        color: var(--primary-900);
    }
    .active {
        color: var(--active);
        font-weight: 700;
    }
    @media (min-width: 768px) {
        .nav-center {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .nav-links {
            flex-direction: row;
            margin-top: 0;
        }
    }
`;
