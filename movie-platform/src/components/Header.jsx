import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="bg-gray-900 dark:bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold"> Movie Dashboard</h1>

      <nav className="flex gap-6 justify-between items-center sp">
        <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
        <NavLink to="/movies" className="hover:text-yellow-400">Movies</NavLink>
        <NavLink to="/about" className="hover:text-yellow-400">About</NavLink>

        <button
          onClick={() => setDark(!dark)}
          className="ml-4 px-3 py-1 bg-gray-700 rounded"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
