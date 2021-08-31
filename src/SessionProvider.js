import React, {createContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import {islogged} from './auth';

const Context = createContext();

function Session({ children }) {

    let talogado = islogged()

    const [session, setSession] = useState({funcionario: ''})    

    const handleLoggout = ()=>{
        localStorage.setItem('talogado', false)
        window.location.reload();          
    }

    const handleLoginFuncionario = (Nomefuncionario)=>{
        localStorage.setItem('talogado', true)
        localStorage.setItem('nomeFunc', Nomefuncionario)
        setSession({funcionario: Nomefuncionario})       
    }

    return (
        <Context.Provider value={{session, talogado, handleLoginFuncionario, handleLoggout}} >
            {children}
        </Context.Provider>
    );
}

export {Context, Session};