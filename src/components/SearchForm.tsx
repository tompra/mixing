import { useNavigation, Form } from 'react-router-dom';
import { SearchWrapper } from '../assets/wrappers/SearchWrap';
const SearchForm: React.FC = (): JSX.Element => {
    return (
        <SearchWrapper>
            <Form className='form'>
                <input
                    type='search'
                    name='search'
                    id='search'
                    className='form-input'
                    defaultValue='meat'
                />
                <button type='submit' className='btn'>
                    Search
                </button>
            </Form>
        </SearchWrapper>
    );
};
export default SearchForm;
