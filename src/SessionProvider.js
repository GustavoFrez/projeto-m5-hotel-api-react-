import React, {createContext, useState} from 'react';
import {islogged} from './auth';
import { history } from './history';

const Context = createContext();

function Session({ children }) {

    
    let talogado = islogged()

    const [session, setSession] = useState({funcionario: ''})  
      
    const [isSairVisible, setIsSairVisible] = useState(false);

    const handleLoggout = (Nomefuncionario)=>{
        localStorage.setItem('talogado', false)
        localStorage.setItem('nomeFunc', Nomefuncionario)
        setSession({funcionario: Nomefuncionario})       
    }

    const handleLoginFuncionario = (Nomefuncionario)=>{
        localStorage.setItem('talogado', true)
        localStorage.setItem('nomeFunc', Nomefuncionario)
        setSession({funcionario: Nomefuncionario})
            
    }

    

    return (
        <Context.Provider value={{session, talogado, handleLoginFuncionario, handleLoggout, isSairVisible, setIsSairVisible}} >
            {children}
        </Context.Provider>
    );
}

export {Context, Session};