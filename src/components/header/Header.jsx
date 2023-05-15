import logo from 'src/assests/icons/logo.svg'
import { ReactComponent as Hamburger } from 'src/assests/icons/icon-menu.svg'
import { ReactComponent as HamburgerClose } from 'src/assests/icons/icon-menu-close.svg'

export default function Header() {
  return (
    <>
      <header className="header">
        {/* logo */}
        <div className="logo-container">
          {/* <Logo className='logo'/> */}
          <img src={logo} alt="logo" className="logo" />
        </div>
        
        {/* navbar-toggle */}
        <input type="checkbox" id="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="burger-container cursor-pointer">
          <Hamburger className="menu-toggle"/>
        </label>

        {/* mask */}
        <div className="mask"></div>

        {/* navbar-menu */}
        <nav className="navbar-menu">
          <label htmlFor="navbar-toggle" className="menu-toggle-close">
            <HamburgerClose className="menu-toggle-close "/>
          </label>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="https://github.com/TimWang95" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/TimWang95" className="nav-link">New</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/TimWang95" className="nav-link">Popular</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/TimWang95" className="nav-link">Trending</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/TimWang95" className="nav-link">Categories</a>
            </li>
          </ul>
        </nav>

        
      </header>
    </>
  )
}