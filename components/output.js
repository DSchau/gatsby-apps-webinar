import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 28px;

  background-color: blue;
  color: white;
  text-transform: uppercase;
`

const Pre = styled.pre`
  width: 100%;
  font-size: 48px;

  margin: 1rem auto;
  color: white;
  background-color: black;
  padding: 1rem;
`;

export default class Output extends React.Component {
  state = {
    visible: false
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ visible: true })}>Run Code</Button>
        {
          this.state.visible && <Pre>{this.props.result}</Pre>
        }
      </div>
    )
  }
}
