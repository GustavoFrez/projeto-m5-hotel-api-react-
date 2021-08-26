import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './Header.module.css';
const Header = () => {
  return (
    <header>
      <nav>
        <Link className={Styles.menu} to="/">
          <div>
            <img src={logo} alt="" className={Styles.logo} />
            <span className={Styles.tituloLogo}>Hotel</span>
          </div>
        </Link>

        <ul>
          <Link className={Styles.menuNav} to="/">
            <li>Home</li>
          </Link>

          <Link className={Styles.menuNav} to="/Quartos">
            <li>Quartos</li>
          </Link>

          <Link className={Styles.menuNav} to="/Experiências">
            <li>Experiências</li>
          </Link>

          <Link className={Styles.menuNav} to="/Contato">
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
