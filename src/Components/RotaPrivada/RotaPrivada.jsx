import React from 'react';
import { Redirect, Router } from 'react-router';

const RotaPrivada = (props) => {

    let isLogged = false

    localStorage.setItem('talogado', isLogged)    

    return isLogged ? <Router { ...props }/> : <Redirect to="/LoginFuncionario" />

}

export default RotaPrivada;