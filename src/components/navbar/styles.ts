import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #f8f9fc;
  width: 100%;
  overflow-x: hidden;
  .topbar {
    height: 4.375rem;
  }
  .topbar .navbar-search {
    width: 25rem;
  }
  .shadow {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  }
  .topbar #sidebarToggleTop {
    height: 2.5rem;
    width: 2.5rem;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .rounded-circle {
    border-radius: 50% !important;
  }
  .topbar .navbar-search input {
    font-size: 0.85rem;
    height: auto;
  }
  .topbar.navbar-light .navbar-nav .nav-item .nav-link {
    color: #d1d3e2;
  }
  .topbar .nav-item .nav-link {
    height: 4.375rem;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    position: relative;
  }
  @media (min-width: 768px) {
    .d-md-none {
      display: none !important;
    }
    .ml-md-3,
    .mx-md-3 {
      margin-left: 1rem !important;
    }
    .my-md-0 {
      margin-bottom: 0 !important;
      margin-top: 0 !important;
    }
  }
  @media (min-width: 576px) {
    .d-sm-none {
      display: none !important;
    }
    .topbar .dropdown {
      position: relative;
    }
    .topbar .dropdown .dropdown-menu {
      width: auto;
      right: 0;
    }
  }
`

export const Wrapper = styled.div`
  flex: 1 0 auto;
`
