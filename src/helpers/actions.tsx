import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
export const newsletterAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await axios.post(
            'https://www.course-api.com/cocktails-newsletter',
            data
        );
        toast.success(response.data.msg);

        return redirect('/');
    } catch (error) {
        console.error(`Error POSTING Newsletter: ${error}`);
        toast.error(`Error: ${error?.response?.data?.msg}`);
        return error;
    }
};
