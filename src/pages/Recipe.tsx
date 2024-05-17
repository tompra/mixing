import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;
const recipeInstructionsURL = `https://api.spoonacular.com/recipes/`;

export const loader = async ({ params }) => {
    const { id } = params;
    const instructionURL = `${recipeInstructionsURL}/${id}/analyzedInstructions?apiKey=${API_KEY}`;

    try {
        const { data } = await axios.get(instructionURL);
        return { id, data };
    } catch (error) {
        throw new Error(`Error fetching recipe ${error}`);
    }
};

const Recipe: React.FC = (): JSX.Element => {
    const { id, data } = useLoaderData();

    const instructions = data[0].steps;

    const ingredientSet = new Set();
    const equipmentSet = new Set();
    const instructionSet = new Set();

    instructions.forEach((instruction) => {
        instructionSet.add(JSON.stringify(instruction.step));
        instruction.ingredients.forEach((ingridient) => {
            ingredientSet.add(ingridient.name);
        });
        instruction.equipment.forEach((equipment) => {
            equipmentSet.add(equipment.name);
        });
    });

    const totalIngredient = Array.from(ingredientSet);

    const totalEquipment = Array.from(equipmentSet);

    const totalInstruction = Array.from(instructionSet);

    return (
        <div>
            <h2>Ingredient</h2>

            {totalIngredient.map((ingridient, index) => {
                return (
                    <p>
                        <span>{index + 1}. </span>
                        {ingridient}
                    </p>
                );
            })}
            <h2>Equipment</h2>

            {totalEquipment.map((equipment) => {
                return <p>{equipment}</p>;
            })}
            <h2>Instructions</h2>
            {totalInstruction.map((instruction, index) => {
                return (
                    <p>
                        <span>{index + 1}.</span> {instruction}
                    </p>
                );
            })}
            <Link to={'/'}>Back to home</Link>
        </div>
    );
};
export default Recipe;
