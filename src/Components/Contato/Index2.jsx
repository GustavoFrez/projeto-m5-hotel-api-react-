import React, { useState } from "react";
import Styles from "./Contato.module.css";
import { Formik } from "formik";
import { ObjectSchema } from "yup";

const Contato2 = () => {
  const [nome, setNome] = useState("");
  const [isSended, setIsSended] = useState("");

  const onClick = () => {
    console.log("SUBMIT");
    console.log("Clicado");
  };

  const handleNome = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };

  const enviaEmail = async (object) => {
    const { nome, email, mensagem } = object;

    const Email = {
      texto: mensagem,
      cliente: nome,
      email: email,
    };

    let post = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
      body: JSON.stringify(Email),
    };

    let url = "https://resiliamailservice.herokuapp.com/sendmail";

    const json = await fetch(url, post);

    console.log(json, Email);
  };

  return (
    <main className={Styles.pai}>
      <section className={Styles.backgroundTopo}>
        <h2>Contato</h2>
      </section>
      <div className={Styles.backgroundContato}>
        <div className={Styles.contato}>
          <div className={Styles.caixaContato}>
            <h5 className={Styles.tituloContato}> Telefone</h5>
            <p className={Styles.textoContato}>+55 (12) 3456-7890</p>
          </div>
          <div className={Styles.caixaContato}>
            <h5 className={Styles.tituloContato}> Localização</h5>
            <p className={Styles.textoContato}>
              R.Hans Staden, 20 - Botafogo, Rio de Janeiro - RJ
            </p>
          </div>
          <div className={Styles.caixaContato}>
            <h5 className={Styles.tituloContato}> Endereço de E-mail</h5>
            <p className={Styles.textoContato}>contact@solari.com</p>
          </div>
        </div>

        <Formik
          initialValues={{ nome: "", email: "", mensagem: "" }}
          validate={(values) => {
            values.nome = nome;
            const errors = {};
            if (!values.nome) {
              errors.nome = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email inválido";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              enviaEmail(values);
              values.nome = "";
              setNome("");
              values.email = "";
              values.mensagem = "";
              setSubmitting(false);
              setIsSended(true);
            }, 400);

            setTimeout(() => {
              setIsSended(false);
            }, 5000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={Styles.formContato}>
              <h5 className={Styles.tituloFormulario}>
                Nos envie uma mensagem
              </h5>
              <input
                className={Styles.inputContato}
                type="text"
                name="Nome"
                onChange={handleNome}
                onBlur={handleBlur}
                value={nome}
                placeholder="Nome"
              />
              {errors.nome && touched.nome && errors.nome}

              <input
                className={Styles.inputContato}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail"
              />
              {errors.email && touched.email && errors.email}

              <textarea
                className={Styles.textAreaContato}
                type="text"
                name="mensagem"
                rows='7'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mensagem}
                required
                placeholder="Mensagem"
              />
              {errors.mensagem && touched.mensagem && errors.mensagem}
              <button
                className={Styles.botaoContato}
                type="submit"
                onClick={onClick}
                disabled={isSubmitting}
              >
                Enviar
              </button>
              <br />
              <br />

              { isSended ?
                <h5 className={Styles.tituloSended}>
                  <h3>SEU EMAIL FOI ENVIADO COM SUCESSO!</h3>
                </h5> : null
              }
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Contato2;
