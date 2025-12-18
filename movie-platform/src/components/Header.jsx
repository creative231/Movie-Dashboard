import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="flex items-center justify-between p-4 bg-sky-200">
      <div>
      <h1 className="text-2xl font-bold text-blue-800">Movie Dashboard</h1>
      </div>


      <NavLink
          to="/"
          className="no-underline transition-transform duration-300 hover:scale-105">
             Home
          </NavLink>
        
        <div>
          <NavLink
           to="/movies"
           className="no-underline transition-transform duration-300 hover:scale-105">
             Movies
           </NavLink>
            </div>

            <div>
           <NavLink
             to="/about"
             className="no-underline transition-transform duration-300 hover:scale-105">
                About
             </NavLink>
             </div>
             
             <div>
             <button
           onClick={() => setDark(!dark)}>
            <span>
                {dark ? "☀️" : "🌙"}
            </span>
           </button>
           </div>
    </header>
    
  );
};

export default Header;
