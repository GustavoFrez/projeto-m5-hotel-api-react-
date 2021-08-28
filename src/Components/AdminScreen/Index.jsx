import React from 'react';
import Styles from './AdminScreen.module.css';
import { Route, Switch } from 'react-router-dom';
import MenuAdmin from './MenuAdmin/Index';

const AdminScreen = () => {
  return (
    <div className={Styles.divContainerPai}>
      <MenuAdmin />
      <div className={Styles.divBoxAdmin}>
        <Switch>
          <Route exact path="/AdminScreen/funcionariosGet">
            <p>TESTEEE</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AdminScreen;
