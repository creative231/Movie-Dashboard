import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-gray-900 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-white">
        MovieDash
      </Link>
      <div className="w-1/2">
        <SearchBar />
      </div>
      <Link to="/favorites" className="text-white">Favorites</Link>
    </header>
  );
}
