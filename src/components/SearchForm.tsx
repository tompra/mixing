import { useNavigation, Form } from 'react-router-dom';
import { SearchWrapper } from '../assets/wrappers/SearchWrap';
import { SearchProps } from '../helpers/types';

const SearchForm: React.FC<SearchProps> = ({ searchTerm }): JSX.Element => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <SearchWrapper>
            <Form className='form'>
                <input
                    type='search'
                    name='search'
                    id='search'
                    className='form-input'
                    defaultValue={searchTerm}
                />
                <button type='submit' className='btn' disabled={isSubmitting}>
                    {isSubmitting ? 'searching' : 'search'}
                </button>
            </Form>
        </SearchWrapper>
    );
};
export default SearchForm;
