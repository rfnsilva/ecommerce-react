import styled from 'styled-components'

interface Props {
  isOpenMessages: boolean
  isOpenAlerts: boolean
  isOpenProfile: boolean
  isOpenSearch: boolean
}

export const Container = styled.div`
  display: flex;
  background-color: #f8f9fc;
  width: 100%;
  overflow-x: hidden;
`

export const Wrapper = styled.div<Props>`
  flex: 1 0 auto;
  height: 100vh;

  .topbar {
    height: 4.375rem;
  }

  .badge-counter {
    position: absolute;
    transform: scale(0.7);
    transform-origin: top right;
    right: 0.25rem;
    margin-top: -0.25rem;
  }

  .shadow {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  }

  .alerts {
    display: ${props => (props.isOpenAlerts ? 'block' : 'none')};
  }

  .messages {
    display: ${props => (props.isOpenMessages ? 'block' : 'none')};
  }

  .profile {
    display: ${props => (props.isOpenProfile ? 'block' : 'none')};
  }

  .search {
    display: ${props => (props.isOpenSearch ? 'block' : 'none')};
  }

  #sidebarToggleTop {
    height: 2.5rem;
    width: 2.5rem;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .navbar-search input {
    font-size: 0.85rem;
    height: auto;
  }

  .nav-link {
    color: #d1d3e2;
    height: 4.375rem;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    position: relative;
  }

  .nav-item img {
    height: 2rem;
    width: 2rem;
  }

  .nav-link:after {
    content: none;
  }

  .topbar-divider {
    width: 0;
    border-right: 1px solid #e3e6f0;
    height: calc(4.375rem - 2rem);
    margin: auto 1rem;
  }

  .dropdown-header {
    background-color: #4e73df;
    border: 1px solid #4e73df;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
  }

  .dropdown-menu {
    width: calc(100% - 1.5rem);
    right: 0.75rem;
    position: absolute;
    font-size: 0.85rem;
  }

  .profile a {
    border-bottom: none !important;
    color: #3a3b45;
  }

  .dropdown-item {
    white-space: normal;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-left: 1px solid #e3e6f0;
    border-right: 1px solid #e3e6f0;
    border-bottom: 1px solid #e3e6f0;
    line-height: 1.3rem;
    align-items: center;

    svg {
      margin-right: 10px;
      color: #d1d3e2;
    }
  }

  .dropdown-list {
    padding: 0;
    border: none;
    overflow: hidden;
  }

  .text-truncate {
    max-width: 13.375rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    .dropdown {
      position: relative;
    }

    .dropdown-menu {
      width: auto;
      right: 0;
    }

    .dropdown-list {
      width: 20rem !important;
    }
  }

  @media (max-width: 576px) {
    .alerts {
      width: 96vw;
      right: -6.15rem;
      position: absolute;
      font-size: 0.85rem;
      float: none;
    }

    .messages {
      width: 96vw;
      right: -3.65rem;
      position: absolute;
      font-size: 0.85rem;
      float: none;
    }

    .profile {
      width: 96vw;
      right: -0.3rem;
      position: absolute;
      font-size: 0.85rem;
      float: none;
    }

    .search {
      width: 96vw;
      right: -8.3rem;
      position: absolute;
      font-size: 0.85rem;
      float: none;
    }

    .dropdown-list {
      padding: 0;
      border: none;
      overflow: hidden;
    }
  }
`
