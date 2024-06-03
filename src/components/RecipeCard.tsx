import { Link } from 'react-router-dom';
import { RecipeCardWrapper } from '../assets/wrappers/RecipeCardWrap';
import { RecipeCardProps } from '../helpers/types';
import { useState } from 'react';

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { id, title, image } = recipe;

    const toggleToSeeMore = () => {
        if (title.length < 30) return;
        setIsExpanded(!isExpanded);
    };

    const truncatedText =
        title.length > 30 ? `${title.substring(0, 30)}...` : title;

    return (
        <RecipeCardWrapper key={id}>
            <div>
                <img src={image} alt={title} className='img' />
            </div>
            <div className='footer'>
                <h5 className='footer-title' onClick={toggleToSeeMore}>
                    {isExpanded ? title : truncatedText}
                </h5>

                <button className='btn'>
                    <Link to={`/recipe/${id}`}>See more</Link>
                </button>
            </div>
        </RecipeCardWrapper>
    );
};
export default RecipeCard;
