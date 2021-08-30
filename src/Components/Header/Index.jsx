import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './Header.module.css';
const Header = () => {
  return (
    <header>
      <nav className={Styles.navHeader}>
        <label>
          <img src={logo} alt="" className={Styles.logos} />
        </label>

        <button className={Styles.botaoMenu}>&#9776;</button>

        <ul className={Styles.ulHeader}>
          <Link className={Styles.linkHeader} to="/">
            <li className={Styles.liHeader}>Home</li>
          </Link>

          <Link className={Styles.linkHeader} to="/Quartos">
            <li className={Styles.liHeader}>Quartos</li>
          </Link>

          <Link className={Styles.linkHeader} to="/Contato">
            <li className={Styles.liHeader}>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
