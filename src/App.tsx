import React from "react";
import { MainLayoutRoutes } from "./layouts/MainLayout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Admission from "./pages/Admission";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <MainLayoutRoutes
          exact
          path='/admission'
          component={Admission}
          title='Поступление'
        />
        <MainLayoutRoutes exact path='/' component={Home} title='Главная' />
      </Switch>
    </Router>
  );
}

export default App;
