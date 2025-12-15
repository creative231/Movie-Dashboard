import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header>
      <h1>Movie Dashboard</h1>
<NavLink
          to="/"
          >
             Home
          </NavLink>

          <NavLink
           to="/movies"
           >
             Movies
           </NavLink>

           <NavLink
             to="/about"
             >
                About
             </NavLink>

             <button
           onClick={() => setDark(!dark)}>
            <span>
                {dark ? "☀️" : "🌙"}
            </span>
           </button>
    </header>
    
  );
};

export default Header;
