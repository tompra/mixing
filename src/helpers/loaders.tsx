import axios from 'axios';
import { LoaderParams, Recipe } from './types';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;

const recipeSearchUrl = `https://api.spoonacular.com/recipes/complexSearch?query=`;
// const recipeInstructionsURL = `https://api.spoonacular.com/recipes/`;
const apiURL = `&information&apiKey=${API_KEY}`;

export const homeLoader = async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get('search') || '';
    const response = await axios.get(
        `${recipeSearchUrl}${searchTerm}${apiURL}`
    );
    return { recipes: response.data.results as Recipe[], searchTerm };
};

export const recipeLoader = async ({ params }): Promise<LoaderParams> => {
    const { id } = params;
    // const instructionURL = `${recipeInstructionsURL}/${id}/analyzedInstructions?apiKey=${API_KEY}`;
    const informationURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`;

    try {
        // const { data } = await axios.get(instructionURL);
        const { data } = await axios.get(informationURL);
        return { id, data };
    } catch (error) {
        throw new Error(`Error fetching recipe ${error}`);
    }
};
