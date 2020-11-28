import React from 'react'

import Navbar from '../../components/navbar'

import Sidebar from '../../components/sidebar'

import { Container } from './styles'

const home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar />
    </Container>
  )
}

export default home
