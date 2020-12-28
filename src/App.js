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
import InfoUser from './pages/home/InfoUser'
import Admin from './pages/admin'
import Product from './components/Admin/product'
import Order from './components/Admin/order'
import Account from './components/Admin/account'
import Category from './components/Admin/category'
import HomeAdmin from './components/Admin/homeAdmin'
import Static from './components/Admin/static'
import { connect } from 'react-redux';
import History from './pages/home/History/history'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/infor" component={InfoUser} />
          <Route exact path="/user_orders" component={UserOrders} />
          <Route path="/shoppingCart">
            <DataCart />
          </Route>
          <Route path="/history">
            {this.props.isLogin ? <History /> : <Login />}
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/dashboard">
            <Dashboard component="Dashboard">
            </Dashboard>
          </Route>
          <Route path='/Admin' component={Admin} />

          <Route exact path="/users">
            <Dashboard component="Users">
            </Dashboard>
          </Route>
          <Route exact path="/users/new" >
            <Dashboard component="NewUser">
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

          {/* Begin Admin */}
          <Route path="/Admin/products">
            <Product />
          </Route>
          <Route path="/Admin/order">
            <Order />
          </Route>
          <Route path="/Admin/account"  >
            <Account />
          </Route>
          <Route path="/Admin/category"  >
            <Category />
          </Route>
          <Route exact path="/Admin">
            <HomeAdmin />
          </Route>
          <Route path="/Admin/static">
            <Static />
          </Route>
          {/* End Admin */}
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.login
})

export default connect(mapStateToProps, null)(App)