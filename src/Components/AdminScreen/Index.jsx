import React, { useContext, useState } from 'react';
import Styles from './AdminScreen.module.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import MenuAdmin from './MenuAdmin/Index';
import Funcionarios from './Funcionarios/Index';
import Clientes from './Clientes/Index'
import Quartos from './Quartos/Index'
import Mobilia from './Mobilia/Index'
import ModalSair from '../ModalSair/ModalSair'

const AdminScreen = () => {

  
  const history = useHistory()
  const {talogado} = useContext

  if(!talogado){
     history.replace('/LoginFuncionario/')  
    }


  return (
    <div className={Styles.divContainerPai}>
      <MenuAdmin />
      <div className={Styles.divBoxAdmin}>
        <Switch>        
          <Route exact path="/AdminScreen/funcionarios">
            <Funcionarios />
          </Route>
          <Route exact path="/AdminScreen/clientes">
            <Clientes />
          </Route>
          <Route exact path="/AdminScreen/quartos">
            <Quartos />
          </Route>
          <Route exact path="/AdminScreen/mobilias">
            <Mobilia />
          </Route>
        </Switch>
     
      </div>
    </div>
  );
};

export default AdminScreen;
