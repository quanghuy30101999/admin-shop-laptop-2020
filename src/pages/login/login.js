import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { login } from '../../actions/login/login.action'
class App extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  isChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  login() {
    this.props.login(this.state);
    this.setState({ email: "", password: "" });
  }
  render() {
    let roles = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')).user.roles : ''
    if (roles !== '') {
      roles = roles[roles.length - 1]
    }
    let { login } = this.props;
    if (login && roles === "ADMIN") {
      return <Redirect to="/Admin" />;
    }
    else if (login && roles === "USER") {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div className="wrapper">
          <div className="upup">
            <a href="/" className="trai">
              <i className="fa fa-home" />
              <span>BKLaptop</span>
            </a>
            <span className="dangnhap">Đăng Nhập</span>
          </div>
          <div className="backgr">
            <div className="formdn">
              <div className="card border-primary ">
                <div className="card-header text-center">Đăng Nhập</div>
                <div className="card-body ">
                  <input onChange={(e) => this.isChange(e)} type="text" className="form-control mb-4" name="email" placeholder="Email/Số điện thoại/Tên đăng nhập" />
                  <input onChange={(e) => this.isChange(e)} type="password" className="form-control " name="password" placeholder="Mật khẩu" />
                </div>
                <div className="btn btn-block btn-danger dk mb-2" onClick={() => this.login()}>Đăng Nhập</div>
                <a href="/" className="quenmk">Quên mật khẩu</a>
                <span className="ffff mb-2">------------- HOẶC --------------</span>
                <div className="dktk mb-4">Bạn chưa có tài khoản ?<Link to="/register" className="dndn">Đăng Ký</Link></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  login: state.login
})


const mapDispatchToProps = dispatch => ({
  login: isLogin => dispatch(login(isLogin))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
