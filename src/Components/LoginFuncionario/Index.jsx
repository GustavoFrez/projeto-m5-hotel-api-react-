import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './LoginFuncionario.module.css';
import Button from '../Button/Index';

const LoginFuncionario = () => {
  const handleLoad = () => {
    window.scrollTo(0, 10);
  };

  return (
    <body className={Styles.backgroundFuncionario}>
      <div onLoad={handleLoad}>
        <form className={Styles.loginBox}>
          <img className={Styles.logoLogin} src={logo} alt="Logo" />
          <div className={Styles.centralizaLogin}>
            <h1 className={Styles.loginTitulo}>Login</h1>
            <div className={Styles.boxLogin}>
              <input
                className={Styles.inputLogin}
                type="email"
                name="fname"
                placeholder="E-mail"
                required
              />

              <input
                className={Styles.inputLogin}
                type="password"
                name="lname"
                placeholder="Senha"
                required
              />
            </div>

            <Button>Login</Button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default LoginFuncionario;
