import React from 'react';
import Styles from './MenuAdmin.module.css';
import { NavLink } from 'react-router-dom';

const MenuAdmin = () => {
  return (
    <div className={Styles.divBoxMenu}>
      <nav className={Styles.navAdmin}>
        <ul className={Styles.ulAdmin}>
          <NavLink className={Styles.linkMenu} to="funcionarios">
            <li className={Styles.liAdmin}>Funcionários</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="clientes">
            <li className={Styles.liAdmin}>Clientes</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="quartos">
            <li className={Styles.liAdmin}>Quartos</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="mobilias">
            <li className={Styles.liAdmin}>Mobília</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default MenuAdmin;
