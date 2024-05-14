import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Layout: React.FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    padding: 5rem 2rem;
`;
export default Layout;
