import { RecipeListProps } from '../helpers/types';
import RecipeCard from './RecipeCard';
import { RecipeListWrapper } from '../assets/wrappers/RecipeListWrap';

const RecipeList: React.FC<RecipeListProps> = ({ recipes }): JSX.Element => {
    if (!recipes) {
        return <h2>Not matching recipes found...</h2>;
    }

    return (
        <RecipeListWrapper>
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
        </RecipeListWrapper>
    );
};
export default RecipeList;
