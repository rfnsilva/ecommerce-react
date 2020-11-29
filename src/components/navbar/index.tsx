import React, { useState } from 'react'
import {
  FaBell,
  FaRegCommentDots,
  FaSearch,
  FaBars,
  FaUserAlt,
  FaSignInAlt
} from 'react-icons/fa'

import { Container, Wrapper } from './styles'

import profileImage from '../../assets/img/profile.svg'

interface Props {
  toggleSidebar(): void
}

const navbar: React.FC<Props> = ({ toggleSidebar }) => {
  const [isOpenAlerts, setIsOpenAlerts] = useState<boolean>(false)
  const [isOpenMessages, setIsOpenMessages] = useState<boolean>(false)
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false)
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false)

  const toggleAlerts = () => {
    setIsOpenAlerts(!isOpenAlerts)
    setIsOpenMessages(false)
    setIsOpenProfile(false)
    setIsOpenSearch(false)
  }

  const toggleMessages = () => {
    setIsOpenMessages(!isOpenMessages)
    setIsOpenAlerts(false)
    setIsOpenProfile(false)
    setIsOpenSearch(false)
  }

  const toggleProfile = () => {
    setIsOpenProfile(!isOpenProfile)
    setIsOpenMessages(false)
    setIsOpenAlerts(false)
    setIsOpenSearch(false)
  }

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch)
    setIsOpenProfile(false)
    setIsOpenMessages(false)
    setIsOpenAlerts(false)
  }

  return (
    <Container>
      <Wrapper
        isOpenMessages={isOpenMessages}
        isOpenAlerts={isOpenAlerts}
        isOpenProfile={isOpenProfile}
        isOpenSearch={isOpenSearch}
      >
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            onClick={toggleSidebar}
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <FaBars />
          </button>
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
                onClick={toggleSearch}
              >
                <FaSearch />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in search"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <FaSearch />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
                onClick={toggleAlerts}
              >
                <FaBell />
                <span className="badge badge-danger badge-counter">3</span>
              </a>
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in alerts"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
                onClick={toggleMessages}
              >
                <FaRegCommentDots />
                <span className="badge badge-danger badge-counter">7</span>
              </a>
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in messages"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header">Message Center</h6>

                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren t
                      good...
                    </div>
                    <div className="small text-gray-500">
                      Chicken the Dog · 2w
                    </div>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block"></div>
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-haspopup="true"
                onClick={toggleProfile}
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Douglas McGee
                </span>
                <img
                  className="img-profile rounded-circle"
                  src={profileImage}
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in profile"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  <FaUserAlt />
                  Profile
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <FaSignInAlt />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Container>
  )
}

export default navbar
