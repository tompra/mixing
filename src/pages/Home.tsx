import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import RecipeList from '../components/RecipeList';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;

const recipeSearchUrl = `https://api.spoonacular.com/recipes/complexSearch?query=`;
const apiURL = `&information&apiKey=${API_KEY}`;

export const loader = async () => {
    const searchTerm = 'pasta';
    const response = await axios.get(
        `${recipeSearchUrl}${searchTerm}${apiURL}`
    );
    return { recipes: response.data.results, searchTerm };
};
const Home: React.FC = (): JSX.Element => {
    const data = useLoaderData() as { recipes?: [] };
    return (
        <>
            <RecipeList recipes={data.recipes} />
        </>
    );
};
export default Home;
