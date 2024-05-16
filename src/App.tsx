import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Layout, Home, Error, Newsletter, Recipe } from './pages/index';
import { loader as homeLoader } from './pages/Home';
import SinglePageError from './pages/SinglePageError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: homeLoader,
                element: <Home />,
                errorElement: <SinglePageError />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'newsletter',
                element: <Newsletter />,
            },
            {
                path: 'recipe',
                element: <Recipe />,
            },
        ],
    },
]);

const App: React.FC = (): JSX.Element => {
    return <RouterProvider router={router} />;
};
export default App;
