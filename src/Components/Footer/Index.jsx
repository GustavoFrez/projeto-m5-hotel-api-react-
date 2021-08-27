import React from 'react';
import Styles from './Footer.module.css';
import Button from '../Button/Index.jsx';
import logo from '../../Assets/img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="" className={Styles.logoFooter} />
      </div>
      <p>Conclusão de Módulo Resilia T5</p>
      <Link to="/LoginFuncionario">
        <Button>Login Funcionário</Button>
      </Link>
    </footer>
  );
};

export default Footer;
