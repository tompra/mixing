import { useRef, useState } from 'react';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import { RecipeWrapper } from '../assets/wrappers/RecipeWrap';
import { Equipment, InstructionStep, RecipeData } from '../helpers/types';

const Recipe: React.FC = (): JSX.Element => {
    const [metricOption, setMetricOption] = useState<boolean>(false);
    const { data } = useLoaderData() as { data: RecipeData };
    const instructionRef = useRef<HTMLDivElement>(null);

    if (!data) return <Navigate to='/' />;

    console.log('data', data);

    const instructions = data.analyzedInstructions[0].steps;
    const ingredientSet = new Set<string>();
    const equipmentSet = new Set<string>();
    const instructionSet = new Set<string>();

    instructions.forEach((instruction: InstructionStep) => {
        instructionSet.add(JSON.stringify(instruction.step));
        instruction.ingredients.forEach((ingredient) => {
            ingredientSet.add(ingredient.name);
        });
        instruction.equipment.forEach((equipment: Equipment) => {
            equipmentSet.add(equipment.name);
        });
    });

    const totalEquipment = Array.from(equipmentSet);
    const totalInstruction = Array.from(instructionSet);

    const scrollToInstructions = () => {
        instructionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const {
        title,
        image,
        readyInMinutes,
        servings,
        extendedIngredients,
        nutrition,
        preparationMinutes,
    } = data;

    return (
        <RecipeWrapper>
            <header>
                <h1>{title}</h1>
                <div className='header--img'>
                    <img
                        src={image}
                        alt={title}
                        className='header--img__dish'
                    />
                </div>
            </header>
            <div className='metric-container'>
                <h4>Measurement options</h4>
                <button className='btn' onClick={scrollToInstructions}>
                    {' '}
                    Jump to Recipe
                </button>
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

            <div className='info-container'>
                <div className='info-items'>
                    <h4>Diets</h4>
                    {data.diets && data.diets.length > 0 ? (
                        data.diets.map((diet, index) => (
                            <p key={index}>{diet}</p>
                        ))
                    ) : (
                        <p>No diets available</p>
                    )}
                </div>
                <div className='info-items'>
                    <h4>Preparation Time</h4>
                    <p>{preparationMinutes}mins</p>
                </div>
                <div className='info-items'>
                    <h4>Cooking Time</h4>
                    <p>{readyInMinutes - preparationMinutes}mins</p>
                </div>
                <div className='info-items'>
                    <h4>Total time</h4>
                    <p>{readyInMinutes}mins</p>
                </div>
                <div className='info-items'>
                    <h4>Servings</h4>
                    <p>{servings} </p>
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
                        <li key={index} className='items-ingredient'>
                            <span>
                                {metricOption
                                    ? `${metricAmount}${metricUnit}`
                                    : `${usAmount}${usUnit}`}{' '}
                            </span>
                            {'   '}
                            <span style={{ fontWeight: '800' }}>
                                {originalName}
                            </span>
                        </li>
                    );
                })}
            </div>

            <div className='equipment-container'>
                <h2>Equipment</h2>
                <p>For this delicious recipe where are going to need:</p>
                {totalEquipment.map((equipment, index) => {
                    return (
                        <li key={index} className='items-equipment'>
                            {equipment}
                        </li>
                    );
                })}
            </div>

            <div className='instruction-container'>
                <h2 ref={instructionRef}>Instructions</h2>
                {totalInstruction.map((instruction, index) => {
                    const cleanedInstruction = instruction
                        .replace(/"/g, '')
                        .replace(/\s\s+/g, ' ')
                        .trim();
                    return (
                        <p key={index} className='instructions-steps'>
                            <span>Step {index + 1}.</span> {cleanedInstruction}
                        </p>
                    );
                })}
            </div>

            <div className='nutrition-container'>
                <h3>Nutrition</h3>
                <div className='nutrition-content'>
                    <div className='nutrition-items'>
                        <h5>Protein</h5>
                        <p>{nutrition.caloricBreakdown.percentProtein}%</p>
                    </div>
                    <div className='nutrition-items'>
                        <h5>Fat</h5>
                        <p>{nutrition.caloricBreakdown.percentFat}%</p>
                    </div>
                    <div className='nutrition-items'>
                        <h5>Carbs</h5>
                        <p>{nutrition.caloricBreakdown.percentCarbs}%</p>
                    </div>
                </div>
            </div>

            <div className='nutrients-container'>
                <h3>Nutrients</h3>

                <table className='nutrients-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrition.nutrients.map((nutrient, index) => {
                            const { name, amount, unit } = nutrient;
                            return (
                                <tr key={index}>
                                    <td>{name}</td>
                                    <td>{amount}</td>
                                    <td>{unit}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className='btn-container'>
                <button className='btn'>
                    <Link to={'/'}>Back to home</Link>
                </button>
            </div>
        </RecipeWrapper>
    );
};
export default Recipe;
