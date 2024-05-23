import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LayoutWrapper } from '../assets/wrappers/LayoutWrap';

const Layout: React.FC = (): JSX.Element => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <>
            <Navbar />
            <LayoutWrapper>
                {isPageLoading ? <div className='loading'></div> : <Outlet />}
            </LayoutWrapper>
        </>
    );
};

export default Layout;
