import axios from 'axios';
import { LoaderParams, Recipe } from './types';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;

const recipeSearchUrl = `https://api.spoonacular.com/recipes/complexSearch?query=`;
const apiURL = `&information&apiKey=${API_KEY}`;

export const searchRecipeQuery = (searchTerm: string) => {
    return {
        queryKey: ['search', searchTerm || 'all'],
        queryFn: async () => {
            const response = await axios.get(
                `${recipeSearchUrl}${searchTerm}${apiURL}`
            );
            return response.data.results as Recipe[];
        },
    };
};

export const homeLoader =
    (queryClient) =>
    async ({ request }) => {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get('search') || '';
        await queryClient.ensureQueryData(searchRecipeQuery(searchTerm));
        return { searchTerm };
    };

export const recipeLoader = async ({ params }): Promise<LoaderParams> => {
    const { id } = params;
    const informationURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`;
    try {
        const { data } = await axios.get(informationURL);
        return { id, data };
    } catch (error) {
        throw new Error(`Error fetching recipe ${error}`);
    }
};
