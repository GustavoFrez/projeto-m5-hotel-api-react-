import React from 'react';
import Styles from './Footer.module.css';
import Button from '../Button/Index.jsx';
import logo from '../../Assets/img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={Styles.footerGeral}>
        <img src={logo} alt="" className={Styles.logoFooter} />

        <p className={Styles.pFooter}>Conclusão de Módulo Resilia T5</p>
        <Link to="/LoginFuncionario">
          <Button>Login Funcionário</Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
