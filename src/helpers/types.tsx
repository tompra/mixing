export interface Recipe {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    extendedIngredients: {
        originalName: string;
        measures: {
            metric: {
                amount: number;
                unitShort: string;
            };
            us: {
                amount: number;
                unitShort: string;
            };
        };
    }[];
    nutrition: {
        caloricBreakdown: {
            percentProtein: number;
            percentFat: number;
            percentCarbs: number;
        };
        nutrients: {
            name: string;
            amount: number;
            unit: string;
        }[];
    };
    diets: string[];
    analyzedInstructions: {
        name: string;
        steps: {
            number: number;
            step: string;
            ingredients: {
                id: number;
                name: string;
                localizedName: string;
                image: string;
            }[];
            equipment: {
                id: number;
                name: string;
                localizedName: string;
                image: string;
            }[];
        }[];
    }[];
}

export type SearchProps = {
    searchTerm: string;
};

export type RecipeListProps = {
    recipes: [];
};

export type RecipeCardProps = {
    recipe: { id: number; title: string; image: string };
};

export type LoaderParams = {
    params: {
        id: string;
    };
};

export type Ingredient = {
    id: number;
    name: string;
    localizedName: string;
    image: string;
    measures: {
        us: { amount: number; unitShort: string; unitLong: string };
        metric: { amount: number; unitShort: string; unitLong: string };
    };
    originalName: string;
};

export type Equipment = {
    id: number;
    name: string;
    localizedName: string;
    image: string;
};

export type InstructionStep = {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
};

export type RecipeData = {
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    extendedIngredients: Ingredient[];
    nutrition: {
        caloricBreakdown: {
            percentProtein: number;
            percentFat: number;
            percentCarbs: number;
        };
        nutrients: { name: string; amount: number; unit: string }[];
    };
    diets: string[];
    analyzedInstructions: { steps: InstructionStep[] }[];
    preparationMinutes: number;
};
