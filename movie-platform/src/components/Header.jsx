import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <h1>Movie Platform</h1>
            {/* <div className="nav">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/movies">Movies</NavLink>
                <NavLink className="navlink" to="/about">About</NavLink>
            </div> */}
        </div>
    );
}

export default Header;