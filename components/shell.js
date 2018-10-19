import React from 'react'
import styled, { keyframes } from 'styled-components'

const APPEAR = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;

  background-color: #CCC;
  position: relative;
`;

const Base = styled.div`
  display: flex;
  height: 100%;
`;

const Header = styled.div`
  height: 10vh;
  width: 100%;

  background-color: #000;
`;

const Footer = styled(Header)`
  background-color: #222;
`;

const Sidebar = styled.div`
  width: 10vw;
  height: 100%;

  background-color: #444;
`;

const Content = styled.div`
  padding: 1rem;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${props => props.height};
  width: 100%;

  margin: 1rem 0;
  color: white;
  font-size: 48px;
  transition: 1.5s ease-in-out;

  animation: ${props => props.animate && `${APPEAR} 1.5s ease-in-out ${props.delay || 0}ms`} normal both;

  background-color: ${props => props.backgroundColor || 'black'};
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 28px;

  background-color: white;
  color: black;
  text-transform: uppercase;
  outline: none;
  border: none;
`

export default class Shell extends React.Component {
  state = {
    loaded: false
  };

  load = () => {
    this.setState({
      loaded: true
    })
  }

  render() {
    const { fetch: shouldFetch } = this.props;
    const { loaded } = this.state;
    const bgColor = loaded ? 'black' : 'red';
    return (
      <Container>
        <Header />
        <Base>
          <Sidebar />
          <Content>
            <Box height="10%" />
            {
              shouldFetch === false && (
                <Box height="50%" backgroundColor={bgColor}>
              {loaded === false && <Button onClick={this.load}>Login</Button>}
            </Box>
              )
            }
            <Box height="20%" />
            {
              shouldFetch && (
                <React.Fragment>
                  {!loaded && <Button onClick={this.load}>fetch data</Button>}
                  {loaded && new Array(4).fill(undefined).map((_, index) => (
                    <Box key={index} height="10%" animate={true} delay={500 * index} />
                  ))}
                </React.Fragment>
              )
            }
          </Content>
        </Base>
        <Footer />
      </Container>
    );
  }
}

Shell.defaultProps = {
  fetch: false
};
