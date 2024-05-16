import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Error: React.FC = (): JSX.Element => {
    const error = useRouteError() as { status?: number };

    console.log(error);

    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <h1>Error 404</h1>
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
`;

export default Error;
