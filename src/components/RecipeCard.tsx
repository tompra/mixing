type Props = {
    recipe: { id: number; title: string; image: string };
};

const RecipeCard: React.FC<Props> = ({ recipe }): JSX.Element => {
    console.log('recipe', recipe);
    const { id, title, image } = recipe;

    return (
        <div key={id}>
            <p>{title}</p>
            <img src={image} alt={title} />
        </div>
    );
};
export default RecipeCard;
