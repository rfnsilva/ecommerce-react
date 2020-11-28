import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #f8f9fc;
  width: 100%;
  overflow-x: hidden;
`

export const Wrapper = styled.div`
  flex: 1 0 auto;

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

  @media (min-width: 576px) {
    .dropdown {
      position: relative;
    }

    .dropdown-menu {
      width: auto;
      right: 0;
    }
  }
`
