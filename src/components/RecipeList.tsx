import RecipeCard from './RecipeCard';

type Props = {
    recipes: [];
};

const RecipeList: React.FC<Props> = ({ recipes }): JSX.Element => {
    console.log('recipes', recipes);

    if (!recipes) {
        return <h2>Not matching recipes found...</h2>;
    }

    return (
        <>
            {recipes.map((recipe) => {
                return <RecipeCard recipe={recipe} />;
            })}
        </>
    );
};
export default RecipeList;
