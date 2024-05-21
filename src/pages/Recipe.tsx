import { useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react';

const Recipe: React.FC = (): JSX.Element => {
    const { data, id } = useLoaderData();
    const [metricOption, setMetricOption] = useState<boolean>(false);

    console.log('datas', data);
    // const instructions = data[0].steps;

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

    const totalIngredient = Array.from(ingredientSet);

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
        <div key={id}>
            <h1>{title}</h1>
            <img src={image} alt={title} />

            <button
                onClick={() => {
                    setMetricOption(!metricOption);
                }}
            >
                {metricOption ? 'metric' : 'us'}
            </button>

            <h2>Ingredient</h2>

            {extendedIngredients.map((ingredient, index) => {
                const { id, originalName, measures } = ingredient;
                const { metric, us } = measures;
                const { amount: metricAmount, unitShort: metricUnit } = metric;
                const { amount: usAmount, unitShort: usUnit } = us;
                return (
                    <p key={id}>
                        <span>{index + 1}. </span>
                        {originalName} -{' '}
                        {metricOption
                            ? `${metricAmount}${metricUnit}`
                            : `${usAmount}${usUnit}`}
                    </p>
                );
            })}
            <h2>Equipment</h2>

            {totalEquipment.map((equipment, index) => {
                return <p key={index}>{equipment}</p>;
            })}

            <h2>Instructions</h2>
            {totalInstruction.map((instruction, index) => {
                return (
                    <p key={index}>
                        <span>{index + 1}.</span> {instruction}
                    </p>
                );
            })}

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
                    <p>
                        {name}: {amount}
                        {unit}
                    </p>
                );
            })}

            <Link to={'/'}>Back to home</Link>
        </div>
    );
};
export default Recipe;
