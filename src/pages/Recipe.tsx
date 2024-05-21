import { useLoaderData, Link } from 'react-router-dom';

const Recipe: React.FC = (): JSX.Element => {
    const { data, id } = useLoaderData();

    console.log('data2', data);
    // const instructions = data[0].steps;

    const instructions = data.analyzedInstructions[0].steps;

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
        <div key={id}>
            <h2>Ingredient</h2>

            {totalIngredient.map((ingridient, index) => {
                return (
                    <p key={index}>
                        <span>{index + 1}. </span>
                        {ingridient}
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
            <p>{data.readyInMinutes}min</p>

            <Link to={'/'}>Back to home</Link>
        </div>
    );
};
export default Recipe;
