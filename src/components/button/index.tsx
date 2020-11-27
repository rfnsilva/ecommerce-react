import React from 'react'

import { Container } from './styles'

interface Props {
  text: string
}

const button: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <button>{text}</button>
    </Container>
  )
}

export default button
