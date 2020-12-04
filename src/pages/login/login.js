import { Component, Fragment } from 'react'
import Navbar from './../../components/Login/Navbar/Navbar'
import Header from '../../components/Login/Header/Header'
import Form from '../../components/Login/Form/Form'
import Footer from '../../components/Login/Footer/Footer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class App extends Component {
  render(){
    let roles = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')).user.roles : ''
    if(roles !== '')
    {
      roles = roles[roles.length - 1]
    }
    let {login} = this.props;
    if(login && roles === "ADMIN") {
      return <Redirect to="/dashboard" />;
    }
    else if(login && roles === "USER") {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div class="bg-default">
        <div>
            <Navbar />
        {/* Main content */}
        <div className="main-content">
            <Header />
            <Form />
        </div>
            <Footer/>
        </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  login: state.login
})
export default connect(mapStateToProps, null)(App)
