import { Component, Fragment } from 'react'

class Dashboard extends Component {
  render(){
    return (
      <Fragment>
          <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="dashboard.html">
              <img src="../assets/img/brand/white.png" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="dashboard.html">
                      <img src="../assets/img/brand/blue.png" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="dashboard.html" className="nav-link">
                    <span className="nav-link-inner--text">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">
                    <span className="nav-link-inner--text">Login</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="register.html" className="nav-link">
                    <span className="nav-link-inner--text">Register</span>
                  </a>
                </li>
              </ul>
              <hr className="d-lg-none" />
              <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                <li className="nav-item">
                  <a className="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook">
                    <i className="fab fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none">Facebook</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                    <i className="fab fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none">Instagram</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                    <i className="fab fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none">Twitter</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-icon" href="https://github.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Star us on Github">
                    <i className="fab fa-github" />
                    <span className="nav-link-inner--text d-lg-none">Github</span>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block ml-lg-4">
                  <a href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=ad_upgrade_pro" target="_blank" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <i className="fas fa-shopping-cart mr-2" />
                    </span>
                    <span className="nav-link-inner--text">Upgrade to PRO</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Dashboard;
