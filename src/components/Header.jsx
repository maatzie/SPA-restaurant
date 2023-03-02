import React from "react";

function Header() {
    return <nav className=" deep-orange darken-4">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Restaurant</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/maatzie/SPA-restaurant">Repo</a></li>
      </ul>
    </div>
  </nav>

}

export {Header}