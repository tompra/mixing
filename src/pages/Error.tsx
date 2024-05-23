import { useRouteError, Link } from 'react-router-dom';
import { ErrorWrapper } from '../assets/wrappers/ErrorWrap';

const Error: React.FC = (): JSX.Element => {
    const error = useRouteError() as { status?: number };

    if (error.status === 404) {
        return (
            <ErrorWrapper>
                <div>
                    <h1>Oh! We have a 404</h1>
                    <p>
                        It seems that we cannot find the page you are looking
                        for
                    </p>
                    <Link to='/'>Back home</Link>
                </div>
            </ErrorWrapper>
        );
    }
    return <h1>Something went wrong...</h1>;
};

export default Error;
