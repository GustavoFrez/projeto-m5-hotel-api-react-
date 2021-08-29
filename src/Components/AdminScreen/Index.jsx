import React from 'react';
import Styles from './AdminScreen.module.css';
import { Route, Switch } from 'react-router-dom';
import MenuAdmin from './MenuAdmin/Index';
import Funcionarios from './Funcionarios/Index';
import Clientes from './Clientes/Index'
import Quartos from './Quartos/Index'
import Mobilia from './Mobilia/Index'

const AdminScreen = () => {
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
