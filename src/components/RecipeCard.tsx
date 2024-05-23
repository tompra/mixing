import { Link } from 'react-router-dom';
import { RecipeCardWrapper } from '../assets/wrappers/RecipeCardWrap';
import { RecipeCardProps } from '../helpers/types';

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }): JSX.Element => {
    const { id, title, image } = recipe;

    return (
        <RecipeCardWrapper key={id}>
            <div>
                <img src={image} alt={title} className='img' />
            </div>
            <div className='footer'>
                <h3>{title}</h3>

                <button className='btn'>
                    <Link to={`/recipe/${id}`}>More information</Link>
                </button>
            </div>
        </RecipeCardWrapper>
    );
};
export default RecipeCard;
