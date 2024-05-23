import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { RecipeWrapper } from '../assets/wrappers/RecipeWrap';

const Recipe: React.FC = (): JSX.Element => {
    const { data, id } = useLoaderData();
    const [metricOption, setMetricOption] = useState<boolean>(false);

    const instructions = data.analyzedInstructions[0].steps;

    const ingredientSet = new Set();
    const equipmentSet = new Set();
    const instructionSet = new Set();

    instructions.forEach((instruction) => {
        instructionSet.add(JSON.stringify(instruction.step));
        instruction.ingredients.forEach((ingredient) => {
            ingredientSet.add(ingredient.name);
        });
        instruction.equipment.forEach((equipment) => {
            equipmentSet.add(equipment.name);
        });
    });

    const totalEquipment = Array.from(equipmentSet);
    const totalInstruction = Array.from(instructionSet);

    const {
        title,
        image,
        readyInMinutes,
        servings,
        extendedIngredients,
        nutrition,
    } = data;

    return (
        <RecipeWrapper>
            <header>
                <h1>{title}</h1>
                <img src={image} alt={title} className='img' />
            </header>
            <div className='metric-container'>
                <h2>Measurement options</h2>
                <div className='metric-options'>
                    <p>US</p>
                    <label className='switch'>
                        <input
                            type='checkbox'
                            onChange={() => {
                                setMetricOption(!metricOption);
                            }}
                        />
                        <span className='slider round'></span>
                    </label>
                    <p>Metric</p>
                </div>
            </div>

            <div className='ingredients-container'>
                <h2>Ingredient</h2>

                {extendedIngredients.map((ingredient, index) => {
                    const { originalName, measures } = ingredient;
                    const { metric, us } = measures;
                    const { amount: metricAmount, unitShort: metricUnit } =
                        metric;
                    const { amount: usAmount, unitShort: usUnit } = us;
                    return (
                        <p key={index} style={{ margin: '0.8rem 0' }}>
                            <span>
                                {metricOption
                                    ? `${metricAmount}${metricUnit}`
                                    : `${usAmount}${usUnit}`}{' '}
                            </span>
                            {'   '}
                            <span style={{ fontWeight: '800' }}>
                                {originalName}
                            </span>
                        </p>
                    );
                })}
            </div>

            <div className='equipment-container'>
                <h2>Equipment</h2>

                {totalEquipment.map((equipment, index) => {
                    return <p key={index}>{equipment}</p>;
                })}
            </div>

            <div className='instruction-container'>
                <h2>Instructions</h2>
                {totalInstruction.map((instruction, index) => {
                    const cleanedInstruction = instruction
                        .replace(/"/g, '')
                        .replace(/\s\s+/g, ' ')
                        .trim();
                    return (
                        <p key={index}>
                            <span>{index + 1}.</span> {cleanedInstruction}
                        </p>
                    );
                })}
            </div>

            <h2>Servings</h2>
            <p>{data.servings}</p>

            <h2>Diets</h2>
            {data.diets && data.diets.length > 0 ? (
                data.diets.map((diet, index) => <p key={index}>{diet}</p>)
            ) : (
                <p>No diets available</p>
            )}

            <h2>Ready in ...</h2>
            <p>{readyInMinutes}min</p>

            <h3>Servings</h3>
            <p>{servings}</p>

            <h3>Nutrition</h3>
            <p>
                Protein:{' '}
                <span>{nutrition.caloricBreakdown.percentProtein}%</span>
            </p>
            <p>
                Fat: <span>{nutrition.caloricBreakdown.percentFat}%</span>
            </p>
            <p>
                Carbs: <span>{nutrition.caloricBreakdown.percentCarbs}%</span>
            </p>

            <h3>Nutrients</h3>

            {nutrition.nutrients.map((nutrient, index) => {
                const { name, amount, unit } = nutrient;
                return (
                    <p key={index}>
                        {name}: {amount}
                        {unit}
                    </p>
                );
            })}

            <Link to={'/'}>Back to home</Link>
        </RecipeWrapper>
    );
};
export default Recipe;
