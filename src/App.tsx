import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Layout, Home, Error, Newsletter, Recipe } from './pages/index';
import { loader as homeLoader } from './pages/Home';
import { loader as recipeLoader } from './pages/Recipe';

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
