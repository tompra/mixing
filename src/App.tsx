import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Layout, Home, Error, Newsletter, Recipe } from './pages/index';
import { homeLoader } from './helpers/loaders';
import { recipeLoader } from './helpers/loaders';
import { newsletterAction } from './helpers/actions';
import SinglePageError from './pages/SinglePageError';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader(queryClient),
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
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />;
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
export default App;
