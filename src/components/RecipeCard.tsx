import { Link } from 'react-router-dom';

type Props = {
    recipe: { id: number; title: string; image: string };
};

const RecipeCard: React.FC<Props> = ({ recipe }): JSX.Element => {
    const { id, title, image } = recipe;

    return (
        <div>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <Link to={`/recipe/${id}`}>More information</Link>
        </div>
    );
};
export default RecipeCard;
