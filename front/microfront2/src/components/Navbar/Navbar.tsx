// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import './Navbar.css'; // Importa el archivo CSS

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;