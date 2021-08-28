import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './Header.module.css';
const Header = () => {
  const auth = false;
  return (
    <header>
      <nav className={Styles.navHeader}>
        <Link className={Styles.menu} to="/">
          <div>
            <img src={logo} alt="" className={Styles.logo} />
          </div>
        </Link>

        <ul className={Styles.ulHeader}>
          <Link className={Styles.menuNav} to="/">
            <li className={Styles.liHeader}>Home</li>
          </Link>

          <Link className={Styles.menuNav} to="/Quartos">
            <li className={Styles.liHeader}>Quartos</li>
          </Link>

          <Link className={Styles.menuNav} to="/Contato">
            <li className={Styles.liHeader}>Contato</li>
          </Link>

          {auth ? (
            <Link className={Styles.menuNav} to="/Admin">
              <li className={Styles.liHeader}>Admin</li>
            </Link>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
