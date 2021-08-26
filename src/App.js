import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Index.jsx';
import Home from './Components/Home/Index.jsx';
import Quarto from './Components/Quartos/Index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Quartos">
            <Quarto />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
