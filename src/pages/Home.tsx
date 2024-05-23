import { useLoaderData } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import SearchForm from '../components/SearchForm';
import { Recipe } from '../helpers/types';

const Home: React.FC = (): JSX.Element => {
    const { recipes, searchTerm } = useLoaderData() as {
        recipes: Recipe[];
        searchTerm: string;
    };
    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <RecipeList recipes={recipes} />
        </>
    );
};
export default Home;
