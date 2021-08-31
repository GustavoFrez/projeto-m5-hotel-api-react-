import React, { useState } from 'react';
import Styles from './Contato.module.css';
import { Formik } from 'formik';


const Contato2 = () => {

    const [nome, setNome] = useState('')

    const onClick = () => {

        console.log('SUBMIT');
        console.log("Clicado")

    }

    const handleNome = (e) => {
        console.log(e.target.value)
        setNome(e.target.value)
    }

    const enviaEmail = async (object) => {

        const { nome, email, mensagem } = object

        const Email = { 
            texto: mensagem,
            cliente: nome,
            email: email 
        }

        let post = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(Email)
        };

        let url = 'https://resiliamailservice.herokuapp.com/sendmail'

       const json = await fetch(url, post)

        console.log(json, Email)

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
                        <h2>R.Hans Staden, 20 - Botafogo, Rio de Janeiro - RJ</h2>
                    </div>
                    <div>
                        <h2 className={Styles.titulo}>Endereço de E-mail</h2>
                        <h2>contact @solari.com</h2>
                    </div>
                </div>
                <div className={Styles.endereco}></div>
            </div>
            <Formik
                initialValues={{ nome: '', email: '', mensagem: '' }}
                validate={(values) => {
                    values.nome = nome
                    const errors = { }
                    if (!values.nome) {
                        errors.nome = 'Required'
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Email invalido';
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        enviaEmail(values)   
                        setSubmitting(false);
                    }, 400);
                }}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting

                }) => (
                    <form onSubmit={handleSubmit} className={Styles.formContato}>
                        <spam className={Styles.msgContato}>
                            Nos envie uma mensagem!
                        </spam>
                        <label> Nome: </label>
                        <input
                            className={Styles.inputContato}
                            type="text"
                            name="Nome"
                            onChange={handleNome}
                            onBlur={handleBlur}
                            value={nome}
                        />
                        {errors.nome && touched.nome && errors.nome}
                        <label> E-mail:</label>
                        <input
                            className={Styles.inputContato}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}

                        />
                        {errors.email && touched.email && errors.email}
                        <label>Mensagem:</label>
                        <input
                            className={Styles.inputContato}
                            type="text"
                            name="mensagem"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mensagem}
                            required
                        />
                        {errors.mensagem && touched.mensagem && errors.mensagem}
                        <button type="submit" onClick={onClick} disabled={isSubmitting}>
                            Enviar
                        </button>
                    </form>
                )}
            </Formik>
        </main >

    );

};

export default Contato2