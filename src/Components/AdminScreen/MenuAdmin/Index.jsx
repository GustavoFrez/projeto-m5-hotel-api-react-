import React from 'react';
import Styles from './MenuAdmin.module.css';
import { NavLink } from 'react-router-dom';

const MenuAdmin = () => {
  return (
    <div className={Styles.divBoxMenu}>
      <nav className={Styles.navAdmin}>
        <ul className={Styles.ulAdmin}>
          <NavLink className={Styles.linkMenu} to="/Admin/funcionarios">
            <li className={Styles.liAdmin}>Funcionários</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="clientesGet">
            <li className={Styles.liAdmin}>Clientes</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="quartoGet">
            <li className={Styles.liAdmin}>Quartos</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="mobiliaGet">
            <li className={Styles.liAdmin}>Mobília</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default MenuAdmin;
