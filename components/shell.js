import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { MdReplay, MdPlayCircleFilled } from 'react-icons/md'

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
  height: 100%;
  width: 100%;

  background-color: #CCC;
  position: relative;

  ${props => props.server && !props.loaded && css`
    background-color: transparent;
  `}

  ${props => props.loaded && props.server && css`
    animation: ${APPEAR} 1s ease-in-out 1.5s normal both;
  `}
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

const Base = styled.div`
  display: flex;
  height: 100%;
`;

const Header = styled.div`
  height: 20%;
  width: 100%;

  background-color: #000;
`;

const Footer = styled(Header)`
  background-color: #222;
`;

const Sidebar = styled.div`
  width: 25%;
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

  ${props => props.animate && props.loaded && css`
    animation: ${APPEAR} 1s ease-in-out ${props.delay || '1.5s'} normal both;
  `}

  background-color: ${props => props.backgroundColor || 'black'};
`;

export default class Shell extends React.Component {
  state = {
    loaded: false
  };

  toggleLoad = () => {
    this.setState(state => ({
      loaded: !state.loaded
    }))
  }

  render() {
    const { fetch: shouldFetch, server } = this.props;
    const { loaded } = this.state;
    const bgColor = loaded || server ? 'black' : 'transparent';
    if (server && !loaded) {
      return (
        <Container server={true} loaded={false} onClick={this.toggleLoad}>
          <Center>
            <MdPlayCircleFilled size="10vw" />
          </Center>
        </Container>
      )
    }
    return (
      <Container server={server} loaded={loaded}>
        <Header />
        <Base>
          <Sidebar />
          <Content>
            <Box height="10%" />
            {!shouldFetch && (
              <React.Fragment>
                <Box height="50%" backgroundColor={bgColor} animate={true} loaded={loaded} onClick={this.toggleLoad}>
                  {loaded ? <MdReplay size="10vw" color="white" /> : <MdPlayCircleFilled size="10vw" color="black" />}
                </Box>
                <Box height="30%" />
              </React.Fragment>
            )}
            {
              shouldFetch && (
                <React.Fragment>
                  {loaded ? (
                    <React.Fragment>
                      {
                        new Array(4).fill(undefined).map((_, index) => (
                          <Box key={index} height={`${67.5 / 4}%`} onClick={this.toggleLoad} animate={true} loaded={true} delay={`${500 * index}ms`} />
                        ))
                      }
                      <Box height="10%" backgroundColor="transparent" onClick={this.toggleLoad}>
                          <MdReplay size="10vw" color="white" />
                        </Box>
                    </React.Fragment>
                  ) : (
                    <Box height="90%" backgroundColor="rgba(0, 0, 0, 0)" onClick={this.toggleLoad}>
                      <MdPlayCircleFilled size="10vw" color="black" />
                    </Box>
                  )}
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
  fetch: false,
  server: false
};
