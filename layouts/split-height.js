import React from 'react'
import styled from 'styled-components'

const SplitHeight = styled.div([], {
  width: '100%',
  '> div': {
    display: 'flex',
    '> *': {
      height: '75vh',
      width: '100%',
      margin: '1rem'
    }
  }
})

export default SplitHeight
