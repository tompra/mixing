import { Form, useNavigation } from 'react-router-dom';
import { NewsLetterWrapper } from '../assets/wrappers/NewsletterWrap';

const NewsLetter: React.FC = (): JSX.Element => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <NewsLetterWrapper>
            <Form className='form' method='POST'>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    our newsletter
                </h2>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        className='form-input'
                        defaultValue='Name'
                        required
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        className='form-input'
                        defaultValue='Last Name'
                        required
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        email
                    </label>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        className='form-input'
                        defaultValue='test@test.com'
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='btn btn-block'
                    style={{ marginTop: '0.5rem' }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'submitting' : 'submit'}
                </button>
            </Form>
        </NewsLetterWrapper>
    );
};
export default NewsLetter;
