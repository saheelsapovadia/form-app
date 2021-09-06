import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <header>
        <div className="name" href="/">
          &lt;/&gt; Form with Validation
        </div>
        <nav>
          <ul className="navlinks">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
