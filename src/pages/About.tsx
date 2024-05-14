import styled from 'styled-components';

const About: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <h1>About us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit fugiat deleniti harum enim ullam est minima
                mollitia deserunt quos rerum repellendus nesciunt non neque
                illum animi quo, reiciendis quidem aperiam.
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    p {
        line-height: 2;
        color: grey;
        margin-top: 2rem;
    }
`;
export default About;
