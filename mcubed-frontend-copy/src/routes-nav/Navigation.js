import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Navigation() {
  console.debug("Navigation");

  function Nav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/saleschat">
            SalesChat
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/apiforms">
            Documentation
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/saleschat">
          MCubed
        </Link>
        {Nav()}
      </div>
    </nav>
  );
}

export default Navigation;