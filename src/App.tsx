import React from "react";
import { MainLayoutRoutes } from "./layouts/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admission from "./pages/Admission";
import Home from "./pages/Home";
import GoodsArrival from "./pages/GoodsArrival";
import Inventory from "./pages/Inventory";
import Revaluation from "./pages/Revaluation";
import AllInventoryGoods from "./pages/AllInventoryGoods";

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
        <MainLayoutRoutes
          exact
          path='/inventory'
          component={Inventory}
          title='Инвентаризация'
        />
        <MainLayoutRoutes
          exact
          path='/revaluation'
          component={Revaluation}
          title='Переоценка'
        />
        <Route exact path='/goods-arrival'>
          <GoodsArrival />
        </Route>
        <Route exact path='/all-inventory-goods'>
          <AllInventoryGoods />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
