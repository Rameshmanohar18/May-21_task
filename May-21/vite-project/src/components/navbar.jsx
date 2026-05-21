import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">React Concepts Lab</Link>

      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/api">API</NavLink>
      <NavLink to="/form">Form</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/scroll">Scroll</NavLink>
      <NavLink to="/parent-child">Parent Child</NavLink>
      <NavLink to="/child-parent">Child Parent</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/performance">Performance</NavLink>

      {isLoggedIn ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}

export default Navbar;
