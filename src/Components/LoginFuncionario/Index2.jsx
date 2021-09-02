import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';
import Styles from './LoginFuncionario.module.css';
import { Formik } from 'formik';
import { Context } from '../../SessionProvider';
import { Redirect } from 'react-router-dom';
import loaderlogin from '../../Assets/img/loaderlogin.gif';
const LoginFuncionario = () => {

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const [imgLoader, setImgLoader] = useState(false)
    const [showError, setShowError] = useState(false)

    const { talogado } = useContext(Context)
    const { handleLoginFuncionario } = useContext(Context)

    const handleLoad = () => {
        window.scrollTo(0, 10);
    };

    const onClick = () => {
        console.log('Clicado');
    };

    const handleCpf = (e) => {
        console.log(e.target.value);
        setCpf(e.target.value);
    };

    const handleSenha = (e) => {
        console.log(e.target.value);
        setSenha(e.target.value);
    };

    const entrou = (objeto) => {       

        if(objeto.ID){
            setImgLoader(false)
            handleLoginFuncionario()
        }else if (objeto.message == "CPF não encontrado"){
            setImgLoader(false)
            setApiResponse("CPF não encontrado")
            setShowError(true)
            setTimeout(() => {setShowError(false)}, 5000)
        } else if (objeto.message == "Senha inválida"){
            setImgLoader(false)
            setApiResponse("Senha inválida")
            setShowError(true)
            setTimeout(() => {setShowError(false)}, 5000)
        }
    }

    const verificaLogin = async (object) => {
      
        setImgLoader(true)
        
        const { cpf, senha } = object;
        const Cpf = {
            cpf: cpf,
            senha: senha
        };
        let post = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            body: JSON.stringify(Cpf),
        };
        let url = 'https://api-rest-funcionarios.herokuapp.com/funcionarios/teste/teste';
        const json = await fetch(url, post);
        const funcionario = await json.json()

       
        entrou(funcionario)
       
    };

    if (talogado) {
        return <Redirect to='/AdminScreen/funcionarios' />
    }

    return (
        <div className={Styles.backgroundFuncionario}>
            <div onLoad={handleLoad}>
                <Formik
                    initialValues={{ cpf: '', senha: '' }}
                    validate={(values) => {
                        values.cpf = cpf;
                        values.senha = senha;
                        const errors = { };
                        if (!values.cpf) {
                            errors.cpf = 'Formato inválido';
                        } else if (
                            !values.senha
                        ) {
                            errors.senha = 'Formato inválido';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            verificaLogin(values);
                            setSubmitting(false);

                        }, 400);
                    }}
                >

                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className={Styles.loginBox}>
                            <img className={Styles.logoLogin} src={logo} alt="Logo" />
                            <div className={Styles.centralizaLogin}>
                                <h1 className={Styles.loginTitulo}>Login</h1>
                                <div className={Styles.boxLogin}>

                                    <input
                                        className={Styles.inputLogin}
                                        type="text"
                                        name="cpf"
                                        onChange={handleCpf}
                                        onBlur={handleBlur}
                                        value={cpf}
                                        placeholder="CPF"
                                    />
                                    {errors.cpf && touched.cpf && errors.cpf}
                                    <input
                                        className={Styles.inputLogin}
                                        type="password"
                                        name="senha"
                                        onChange={handleSenha}
                                        onBlur={handleBlur}
                                        value={senha}
                                        placeholder="Senha"
                                    />
                                    {errors.senha && touched.senha && errors.senha}
                                    <div className={Styles.boxButtonLogin}>
                                        <button
                                            type="submit"
                                            onClick={onClick}
                                            className={Styles.botao}
                                            disabled={isSubmitting}
                                        >
                                            Login
                                        </button>

                                        {showError ? <p className={Styles.error}>{apiResponse}</p> : null}
                                        {imgLoader ? <img className={Styles.loader} src={loaderlogin} /> : null}
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>

    )

}

export default LoginFuncionario;