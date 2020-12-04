import { Component, Fragment } from 'react'
import Dashboard from './pages/dashboard/dashboard'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './pages/home/home'
import Login from './pages/login/login'
import DataCart from './pages/home/cart/DataCart'
import UserOrders from './pages/orders/orders';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/user_orders" component={UserOrders} />
          <Route path="/shoppingCart">
              <DataCart/>
          </Route>
          <Route exact path="/login" component={Login} />
          
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
          <Route path="/products">
              <Dashboard component="Products">
              </Dashboard>
          </Route>
          <Route path="/orders">
              <Dashboard component="Orders">
              </Dashboard>
          </Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
