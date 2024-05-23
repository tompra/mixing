import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LayoutWrapper } from '../assets/wrappers/LayoutWrap';
import Loading from '../components/Loading';
import SearchForm from '../components/SearchForm';

const Layout: React.FC = (): JSX.Element => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <>
            <Navbar />
            <SearchForm />
            <LayoutWrapper>
                {isPageLoading ? <Loading /> : <Outlet />}
            </LayoutWrapper>
        </>
    );
};

export default Layout;
