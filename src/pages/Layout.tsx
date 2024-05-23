import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LayoutWrapper } from '../assets/wrappers/LayoutWrap';
import Loading from '../components/Loading';

const Layout: React.FC = (): JSX.Element => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <>
            <Navbar />
            <LayoutWrapper>
                {isPageLoading ? <Loading /> : <Outlet />}
            </LayoutWrapper>
        </>
    );
};

export default Layout;
