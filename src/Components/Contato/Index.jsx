import React from 'react';
import Styles from './Contato.module.css';
import Button from '../Button/Index';
import { Formik, Field, Form } from 'formik';
import schema from './schema';

const Contato = () => {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  return (
    <main>
      <section className={Styles.backgroundTopo}>
        <h2>Contato</h2>
      </section>
      <div className={Styles.backgroundContato}>
        <div className={Styles.contato}>
          <div>
            <h2 className={Styles.titulo}>Telefone</h2>
            <h2>+55 (12) 3456-7890</h2>
          </div>
          <div>
            <h2 className={Styles.titulo}>Localização</h2>
            <h2>R. Hans Staden, 20 - Botafogo, Rio de Janeiro - RJ</h2>
          </div>
          <div>
            <h2 className={Styles.titulo}>Endereço de E-mail</h2>
            <h2>contact@solari.com</h2>
          </div>
        </div>
        <div className={Styles.endereco}>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
              name: '',
              email: '',
              mensagem: '',
            }}
            render={({ values, errors, touched, isValid }) => (
              <Form className={Styles.formContato}>
                <spam className={Styles.msgContato}>
                  Nos envie uma mensagem!
                </spam>
                <label> Nome: </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  className={Styles.inputContato}
                />
                {errors.name && touched.name && (
                  <span className={Styles.erro}>{errors.name}</span>
                )}
                <br></br>
                <label> E-mail:</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Digite seu E-mail"
                  className={Styles.inputContato}
                />
                {errors.email && touched.email && (
                  <span className={Styles.erro}>{errors.email}</span>
                )}
                <br></br>
                <label>Mensagem:</label>
                <Field
                  type="text"
                  name="mensagem"
                  placeholder="Digite sua mensagem"
                  className={Styles.mensagem}
                />
                {errors.mensagem && touched.mensagem && (
                  <span className={Styles.erro}>{errors.mensagem}</span>
                )}
                <br></br>
                <Button type="submit" disabled={!isValid}>
                  Enviar
                </Button>
              </Form>
            )}
          />
        </div>
      </div>
    </main>
  );
};

export default Contato;
