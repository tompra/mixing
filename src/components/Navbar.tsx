import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <div className='nav-center'>
                <span className='logo'>MixingRecipes</span>
                <div className='nav-links'>
                    <NavLink to='/' className='nav-link'>
                        Home
                    </NavLink>
                    <NavLink to='/about' className='nav-link'>
                        About
                    </NavLink>
                    <NavLink to='/newsletter' className='nav-link'>
                        Newsletter
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    background-color: lightgrey;
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
        color: #2222e1;
        font-weight: 700;
        letter-spacing: 2px;
    }
    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    .nav-link {
        color: navy;
        padding: 0.5rem 0.5rem 0.5rem 0;
        letter-spacing: 2px;
    }
    .nav-link {
        color: navajowhite;
    }
    .nav-link:hover {
        color: blue;
    }
    .active {
        color: red;
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

export default Navbar;
