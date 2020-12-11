import { Component, Fragment } from 'react'
import Sidenav from '../../components/Sidenav/Sidenav'
import Header from '../../components/Header/Header'
import Dashboard from '../../components/Dashboard/Dashboard'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Orders from '../../components/Orders/Orders'
import Users from '../../components/Users/Users'
import NewProduct from '../../components/Products/NewProduct'
import NewCategory from '../../components/Categories/NewCategory'
import NewUser from '../../components/Users/NewUser'

class App extends Component {
  render() {
    let { component } = this.props;
    switch (component) {
      case "Dashboard":
        component = <Dashboard></Dashboard>
        break;
      case "Users":
        component = <Users></Users>
        break;
      case "Categories":
        component = <Categories></Categories>
        break;
      case "Products":
        component = <Products></Products>
        break;
      case "Orders":
        component = <Orders></Orders>
        break;
      case "NewProduct":
        component = <NewProduct></NewProduct>
        break;
      case "NewCategory":
        component = <NewCategory></NewCategory>
        break;
      case "NewUser":
        component = <NewUser></NewUser>
        break;
      default:
        component = <Dashboard></Dashboard>
        break;
    }
    return (
      <Fragment>
        <div>
          <Sidenav />
          <div className="main-content" id="panel">
            <Header />
            <div>
              <div className="container-fluid">
                <div className="header-body">
                  {component}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
