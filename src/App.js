import { Component, Fragment } from 'react'
import Dashboard from './pages/dashboard/dashboard'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/home/home'
import Login from './pages/login/login'
import DataCart from './pages/home/cart/DataCart'
import UserOrders from './pages/orders/orders';
import Register from './pages/Register/Register'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/user_orders" component={UserOrders} />
          <Route path="/shoppingCart">
            <DataCart />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/dashboard">
            <Dashboard component="Dashboard">
            </Dashboard>
          </Route>
          <Route path="/users">
            <Dashboard component="Users">
            </Dashboard>
          </Route>
          <Route path="/categories">
            <Dashboard component="Categories">
            </Dashboard>
          </Route>
          <Route exact path="/category/new" >
            <Dashboard component="NewCategory">
            </Dashboard>
          </Route>
          <Route exact path="/products">
            <Dashboard component="Products">
            </Dashboard>
          </Route>
          <Route exact path="/product/new" >
            <Dashboard component="NewProduct">
            </Dashboard>
          </Route>
          <Route path="/orders">
            <Dashboard component="Orders">
            </Dashboard>
          </Route>
          <Route exact path="/products/new">
              <Dashboard component="NewProduct">
              </Dashboard>
          </Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
