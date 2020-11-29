import React, { useState } from 'react'
import {
  FaGrinWink,
  FaTachometerAlt,
  FaCog,
  FaWrench,
  FaAngleRight
} from 'react-icons/fa'

import { Container, Icon } from './styles'

interface Props {
  isOpenSidebar: boolean
}
const sidebar: React.FC<Props> = ({ isOpenSidebar }) => {
  const [isOpenSidebarSubMenu, setIsOpenSidebarSubMenu] = useState<boolean>(
    false
  )
  const [
    subMenuSidebarClassName,
    setSubMenuSidebarClassName
  ] = useState<string>('')

  const toggleSidebarSubMenu = (className: string) => {
    setIsOpenSidebarSubMenu(!isOpenSidebarSubMenu)
    setSubMenuSidebarClassName(className)
  }

  return (
    <Container
      isOpenSidebarSubMenu={isOpenSidebarSubMenu}
      isOpenSidebar={isOpenSidebar}
      subMenuSidebarClassName={subMenuSidebarClassName}
    >
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FaGrinWink />
          </div>
          <div className="sidebar-brand-text mx-3">
            Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li
          className="nav-item"
          onClick={() => toggleSidebarSubMenu('submenu1')}
        >
          <a className="nav-link" href="#">
            <FaCog />
            <span>Components</span>
            <Icon>
              <FaAngleRight />
            </Icon>
          </a>
          <div className="submenu1">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>

        <li
          className="nav-item"
          onClick={() => toggleSidebarSubMenu('submenu2')}
        >
          <a className="nav-link" href="#">
            <FaWrench />
            <span>Utilities</span>
            <Icon>
              <FaAngleRight />
            </Icon>
          </a>
          <div className="submenu2">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  )
}

export default sidebar
