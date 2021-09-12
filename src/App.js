import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Index.jsx';
import Home from './Components/Home/Index.jsx';
import Quarto from './Components/Quartos/Index';
import Footer from './Components/Footer/Index';
import LoginFuncionario from './Components/LoginFuncionario/Index2';
import AdminScreen from './Components/AdminScreen/Index';
import Contato from './Components/Contato/Index2';
import RotaPrivada from './Components/RotaPrivada/RotaPrivada'
import {history} from './history'
import React from 'react'
import { Session } from './SessionProvider';

function App() {

  return (
    <div>
      <Session>
      <BrowserRouter>      
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Quartos">
            <Quarto />
          </Route>
          <Route exact path="/Contato">
            <Contato />
          </Route>
          <Route exact path="/LoginFuncionario">
            <LoginFuncionario />
          </Route>
          <RotaPrivada history={history} exact path="/AdminScreen*">
            <AdminScreen /> 
          </RotaPrivada>
        </Switch>
        <Footer />   
            
      </BrowserRouter>
      </Session>
    </div>
  );
}

export default App;
