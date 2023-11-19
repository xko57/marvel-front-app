import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        className="logo-header"
        src="../src/styles/img/Logo-Marvel-Pochoir.png"
        alt=""
      />
      <nav>
        <ul>
          <li>
            <Link className="menu-title" to="/">
              Personnages
            </Link>
          </li>
          <li>
            <Link className="menu-title" to="/comics">
              Comics
            </Link>
          </li>
          <li>
            <Link className="menu-title" to="/favoris">
              Favoris
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
