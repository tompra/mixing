import RecipeList from '../components/RecipeList';
import SearchForm from '../components/SearchForm';
import Loading from '../components/Loading';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { searchRecipeQuery } from '../helpers/loaders';

const Home: React.FC = (): JSX.Element => {
    const { searchTerm } = useLoaderData() as {
        searchTerm: string;
    };
    const {
        data: recipes,
        error,
        isLoading,
    } = useQuery(searchRecipeQuery(searchTerm));

    if (isLoading) return <Loading />;

    if (error) return <h2>Error fetching recipes: {error.message}</h2>;

    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <RecipeList recipes={recipes} />
        </>
    );
};
export default Home;
