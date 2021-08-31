import React, { useContext } from 'react';
import { Redirect, Router } from 'react-router';
import { Context }  from '../../SessionProvider';


const RotaPrivada = (props) => {
    
    const {talogado} = useContext(Context)

    return talogado ? <Router { ...props }/> : <Redirect to="/LoginFuncionario" />

}

export default RotaPrivada;