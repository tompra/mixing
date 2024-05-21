import { useLoaderData } from 'react-router-dom';
import RecipeList from '../components/RecipeList';

const Home: React.FC = (): JSX.Element => {
    const data = useLoaderData() as { recipes?: [] };
    return <RecipeList recipes={data.recipes} />;
};
export default Home;
