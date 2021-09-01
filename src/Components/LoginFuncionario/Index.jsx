import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './LoginFuncionario.module.css';
import Button from '../Button/Index';
import { Formik, Field, Form } from 'formik';
import schema from '../Contato/schema';
import { Context } from '../../SessionProvider';
import { Redirect } from 'react-router-dom';

const LoginFuncionario = () => {

  const {talogado} = useContext(Context)

  const handleLoad = () => {
    window.scrollTo(0, 10);
  };

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  if(talogado){
    return <Redirect to='/adminscreen/funcionarios'/> 
  }

  return (
    <body className={Styles.backgroundFuncionario}>
      <div onLoad={handleLoad}>
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{
            cpf: '',
            senha: '',
          }}
          render={({ values, errors, touched, isValid }) => (
            <Form className={Styles.loginBox}>
              <img className={Styles.logoLogin} src={logo} alt="Logo" />
              <div className={Styles.centralizaLogin}>
                <h1 className={Styles.loginTitulo}>Login</h1>
                <div className={Styles.boxLogin}>
                  <Field
                    className={Styles.inputLogin}
                    type="text"
                    name="Cpf"
                    placeholder="Cpf"
                    required
                  />

                  {errors.cpf && touched.cpf && (
                    <span className={Styles.erro}>{errors.cpf}</span>
                  )}

                  <Field
                    className={Styles.inputLogin}
                    type="password"
                    name="password"
                    placeholder="Senha"
                    required
                  />
                  {errors.senha && touched.senha && (
                    <span className={Styles.erro}>{errors.senha}</span>
                  )}
                </div>
                <div className={Styles.boxButtonLogin}>
                  <Button
                    c
                    type="submit"
                    disabled={!isValid}
                    className={Styles.botao}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    </body>
  );
};

export default LoginFuncionario;
