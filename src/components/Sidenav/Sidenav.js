import { Component, Fragment } from 'react'
import {
  NavLink
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Fragment>
        {/* Sidenav */}
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
          <div className="scrollbar-inner">
            {/* Brand */}
            <div className="sidenav-header  align-items-center">
              <a className="navbar-brand">
                <img src="../assets/img/brand/admin.png" className="navbar-brand-img" alt="..." />
              </a>
            </div>
            <div className="navbar-inner">
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                {/* Nav items */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            <i className="ni ni-tv-2 text-primary" />
                            <span className="nav-link-text">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/dashboard">
                        <i className="ni ni-tv-2 text-primary" />
                        <span className="nav-link-text">Dashboard</span>
                      </NavLink>
                    </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/orders">
                        <i className="ni ni-planet text-orange" />
                        <span className="nav-link-text">Orders</span>
                      </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/products">
                        <i className="ni ni-pin-3 text-primary" />
                        <span className="nav-link-text">Products</span>
                      </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/users">
                        <i className="ni ni-single-02 text-yellow" />
                        <span className="nav-link-text">Users</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/categories">
                        <i className="ni ni-bullet-list-67 text-default" />
                        <span className="nav-link-text">Categories</span>
                      </NavLink>
                  </li>
                </ul>
                {/* Divider */}
                <hr className="my-3" />
                {/* Heading */}
                <h6 className="navbar-heading p-0 text-muted">
                  <span className="docs-normal">Documentation</span>
                </h6>
                {/* Navigation */}
                <ul className="navbar-nav mb-md-3">
                  <li className="nav-item">
                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                      <i className="ni ni-spaceship" />
                      <span className="nav-link-text">Getting started</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                      <i className="ni ni-palette" />
                      <span className="nav-link-text">Foundation</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                      <i className="ni ni-ui-04" />
                      <span className="nav-link-text">Components</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                      <i className="ni ni-chart-pie-35" />
                      <span className="nav-link-text">Plugins</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active active-pro" href="upgrade.html">
                      <i className="ni ni-send text-dark" />
                      <span className="nav-link-text">Upgrade to PRO</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default App;
