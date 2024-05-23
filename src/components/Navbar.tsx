import { NavLink } from 'react-router-dom';
import { NavbarWrapper } from '../assets/wrappers/NavbarWrap';

const Navbar: React.FC = (): JSX.Element => {
    return (
        <NavbarWrapper>
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
        </NavbarWrapper>
    );
};

export default Navbar;
