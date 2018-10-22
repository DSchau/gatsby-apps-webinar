import React from 'react'
import styled from 'styled-components'

const Container = styled.div({

})

const Image = styled.img({
  maxHeight: '25vh'
})

const Heading = styled.h3({
  margin: 0,
  fontSize: '24px',
  padding: '0.25rem 0'
})

const Subheading = styled(Heading)({
  margin: 0,
  fontSize: '20px',
  padding: '0.25rem 0'
}).withComponent('h4')

function Presenter({ children, image, name, title }) {
  return (
    <Container>
      <Image src={image} />
      <Heading>{name}</Heading>
      <Subheading>{title}</Subheading>
      <Subheading>Gatsby</Subheading>
      {children}
    </Container>
  )
}

export default Presenter