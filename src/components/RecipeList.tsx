import { RecipeListProps } from '../helpers/types';
import RecipeCard from './RecipeCard';

const RecipeList: React.FC<RecipeListProps> = ({ recipes }): JSX.Element => {
    if (!recipes) {
        return <h2>Not matching recipes found...</h2>;
    }

    return (
        <>
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
        </>
    );
};
export default RecipeList;
