import React from 'react'
import './header.css';
import {Link, BrowserRouter} from "react-router-dom";
const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Star-DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li><Link to="/planet">Planets</Link></li>
        <li><a href="#">Starships</a></li>
      </ul>
    </div>
  )
}

export default Header;
