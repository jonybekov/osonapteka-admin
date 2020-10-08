import React from "react";
import { MainLayoutRoutes } from "./layouts/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admission from "./pages/Admission";
import Home from "./pages/Home";
import GoodsArrival from "./pages/GoodsArrival";
import Inventory from "./pages/Inventory";
import Revaluation from "./pages/Revaluation";
import AllInventoryGoods from "./pages/AllInventoryGoods";
import Settings from "./pages/Settings";
import CashiersManagement from "./pages/CashiersManagement";
import CashierDetails from "./pages/CashierDetails";
// const GoodsArrival = React.lazy(() => import("./pages/GoodsArrival"));
// const Inventory = React.lazy(() => import("./pages/Inventory"));
// const Revaluation = React.lazy(() => import("./pages/Revaluation"));
// const AllInventoryGoods = React.lazy(() => import("./pages/AllInventoryGoods"));
// const Settings = React.lazy(() => import("./pages/Settings"));
// const CashiersManagement = React.lazy(
//   () => import("./pages/CashiersManagement")
// );

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
        <MainLayoutRoutes
          exact
          path='/settings'
          component={Settings}
          title='Настройки'
        />
        <MainLayoutRoutes
          exact
          path='/settings/manage-cashiers'
          component={CashiersManagement}
          title='Управление кассирами'
        />
        <MainLayoutRoutes
          exact
          path='/cashier/:id'
          component={CashierDetails}
          title='Бобур Мамедов'
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
