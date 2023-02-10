import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navbar() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact="true" to="/" className={({ isActive }) => isActive? "active": ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/about" className={({ isActive }) => isActive? "active": ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/contact" className={({ isActive }) => isActive? "active": ''}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className={({ isActive }) => isActive? "active": ''}>
            Categories
          </NavLink>
        </li>
        {!auth.isLogged() && (
          <>
            <li>
              <NavLink exact="true" to="/login" className={({ isActive }) => isActive? "active": ''}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to="/register" className={({ isActive }) => isActive? "active": ''}>
                Register
              </NavLink>
            </li>
          </>
        )}
        
        {auth.isLogged() && (
          <>
            <li>
              <NavLink exact="true" to="/dashboard" className={({ isActive }) => isActive? "active": ''}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to="/payments" className={({ isActive }) => isActive? "active": ''}>
                Payments
              </NavLink>
            </li>
            <li>
              <button onClick={auth.logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
