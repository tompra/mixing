import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';

const Error: React.FC = (): JSX.Element => {
    const error = useRouteError() as { status?: number };

    console.log(error);

    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <h1>Error 404</h1>
                    <p>There was an error in the url</p>
                    <Link to='/'>Back home</Link>
                </div>
            </Wrapper>
        );
    }
    return <h1>Error</h1>;
};

const Wrapper = styled.div`
    min-height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        margin-bottom: 2rem;
    }
    a {
        text-decoration: none;
        text-transform: capitalize;
    }
`;

export default Error;
