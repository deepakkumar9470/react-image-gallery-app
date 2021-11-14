

import { Search } from '@mui/icons-material'
import { useContext } from 'react';
import { ThemeContext } from './../context/context';

const Navbar = ({ query, handleChange, handleSubmit }) => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <nav className= "navbar navbar-expand-lg navbar-light  nav">
      <div className="container-fluid">
        <a className="navbar-brand brand-text" href="/">Image Gallery</a>

        <div className="search-div">
          <input
            style={{backgroundColor : darkMode && '#333',color :darkMode && '#fff'}}
            className="form-control me-2"
            type="search" placeholder="Search image here"
            aria-label="Search"
            value={query}
            onChange={handleChange}
          />
          <Search className="searchBar" onClick={handleSubmit} />
        </div>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mc-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Collection</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Community</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
