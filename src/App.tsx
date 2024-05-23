import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Layout, Home, Error, Newsletter, Recipe } from './pages/index';
import { homeLoader } from './helpers/loaders';
import { recipeLoader } from './helpers/loaders';
import { newsletterAction } from './helpers/actions';
import SinglePageError from './pages/SinglePageError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader,
                errorElement: <SinglePageError />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'newsletter',
                element: <Newsletter />,
                action: newsletterAction,
            },
            {
                path: 'recipe/:id',
                errorElement: <SinglePageError />,
                loader: recipeLoader,
                element: <Recipe />,
            },
        ],
    },
]);

const App: React.FC = (): JSX.Element => {
    return <RouterProvider router={router} />;
};
export default App;
