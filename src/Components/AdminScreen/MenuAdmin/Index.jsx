import React from 'react';
import Styles from './MenuAdmin.module.css';
import { NavLink } from 'react-router-dom';

const MenuAdmin = () => {
  return (
    <div className={Styles.divBoxMenu}>
      <nav className={Styles.navAdmin}>
        <ul className={Styles.ulAdmin}>
          <NavLink className={Styles.linkMenu} to="/AdminScreen/funcionarios">
            <li className={Styles.liAdmin}>Funcionários</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="/AdminScreen/clientes">
            <li className={Styles.liAdmin}>Clientes</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="/AdminScreen/quartos">
            <li className={Styles.liAdmin}>Quartos</li>
          </NavLink>

          <NavLink className={Styles.linkMenu} to="/AdminScreen/mobilias">
            <li className={Styles.liAdmin}>Mobília</li>
          </NavLink>
    

        </ul>
      </nav>
    </div>
  );
};

export default MenuAdmin;
