import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Layout, Home, Error, Newsletter, Recipe } from './pages/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
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
            {
                path: 'error',
                element: <Error />,
            },
        ],
    },
]);

const App: React.FC = (): JSX.Element => {
    return <RouterProvider router={router} />;
};
export default App;
