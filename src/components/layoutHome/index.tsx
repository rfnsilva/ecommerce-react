import React, { useState } from 'react'

import NavBar from '../../components/navbar'
import Sidebar from '../../components/sidebar'

import { Container } from './styles'

const layoutHome: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <Container>
      <Sidebar isOpenSidebar={isOpenSidebar} />
      <NavBar toggleSidebar={toggleSidebar} />
    </Container>
  )
}

export default layoutHome
