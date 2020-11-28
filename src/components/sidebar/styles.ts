import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .sidebar {
    width: 6.5rem;
    min-height: 100vh;
  }

  .bg-gradient-primary {
    background-color: #4e73df;
    background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
    background-size: cover;
  }

  .accordion {
    overflow-anchor: none;
  }

  .sidebar-dark .sidebar-brand {
    color: #fff;
  }

  .sidebar .sidebar-brand {
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;
  }

  .rotate-n-15 {
    transform: rotate(-15deg);
  }

  .sidebar-dark hr.sidebar-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }
  .sidebar hr.sidebar-divider {
    margin: 0 1rem 1rem;
  }
  .sidebar .nav-item {
    position: relative;
  }
  .sidebar-dark .nav-item.active .nav-link {
    color: #fff;
  }
  .sidebar .nav-item.active .nav-link {
    font-weight: 700;
  }
  .sidebar-dark .sidebar-heading {
    color: rgba(255, 255, 255, 0.4);
  }
  .sidebar-dark .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.8);
  }
  .sidebar-dark .nav-item .nav-link i {
    color: rgba(255, 255, 255, 0.3);
  }
  .sidebar .nav-item .collapse .collapse-inner .collapse-header {
    margin: 0;
    white-space: nowrap;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.65rem;
    color: #b7b9cc;
  }
  .sidebar .nav-item .collapse .collapse-inner .collapse-item {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    display: block;
    color: #3a3b45;
    text-decoration: none;
    border-radius: 0.35rem;
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    .sidebar {
      width: 14rem !important;
    }

    .sidebar .sidebar-brand .sidebar-brand-icon i {
      font-size: 2rem;
    }

    .sidebar .sidebar-brand .sidebar-brand-text {
      display: inline;
    }

    sup {
      top: -0.5em;
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }
    .sidebar .nav-item .nav-link {
      display: block;
      width: 100%;
      text-align: left;
      padding: 1rem;
      width: 14rem;
    }
    .sidebar .nav-item .nav-link i {
      font-size: 0.85rem;
      margin-right: 0.25rem;
    }
    .sidebar .nav-item .nav-link span {
      font-size: 0.85rem;
      display: inline;
    }
    .sidebar .sidebar-heading {
      text-align: left;
    }
    .sidebar .nav-item .collapse {
      margin: 0 1rem;
      position: relative;
      left: 0;
      z-index: 1;
      top: 0;
      -webkit-animation: none;
      animation: none;
    }
    .sidebar .nav-item .collapse .collapse-inner {
      border-radius: 0;
      box-shadow: none;
      padding: 0.5rem 0;
      min-width: 10rem;
      font-size: 0.85rem;
      margin: 0 0 1rem 0;
    }
  }
`
