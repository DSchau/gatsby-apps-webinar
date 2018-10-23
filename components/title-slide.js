import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div([], {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw'
})

const Section = styled.div([], {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  paddingLeft: '10vw',
  paddingBottom: '5vh',
  paddingTop: '5vh',
  'h1, h2, h3, h4, h5, h6': {
    color: '#663399',
    textAlign: 'left',
    margin: 0
  }
}, props => props.secondary ? css({
  justifyContent: 'flex-start',
  backgroundColor: `#663399`,
  'h1, h2, h3, h4, h5, h6': {
    color: 'white'
  }
}) : null)

function TitleSlide({ children }) {
  const [first, second = <React.Fragment />] = React.Children.toArray(children);
  return (
    <Container>
      <Section>{first}</Section>
      <Section backgroundColor="#" secondary={true}>{second}</Section>
    </Container>
  );
}

export default TitleSlide