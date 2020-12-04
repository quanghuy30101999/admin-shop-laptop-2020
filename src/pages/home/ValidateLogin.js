import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/login/login.action'
import { Link } from 'react-router-dom'


class ValidateLogin extends Component {
    constructor(){
        super();
        this.state = {
            hienThiUser : false
        }
    }

    componentDidMount(){

    }

    kiemTraDangNhap(){
        let user_name = localStorage.getItem('token') !== null ? JSON.parse(localStorage.getItem('token')).user.name : ''
        let { login } = this.props;
        if(login === false)
            return (
                <div className="up">
                    <Link to="/login"  >Đăng Nhập</Link> |
                    <Link to="/register" > Đăng Ký </Link>
                </div>
            )
        else return(
            <a href="/" className="user" onClick={(e)=>this.hienThiThongTinUser(e)}>
                <span>Hi, {user_name}</span>
                <i className="fa fa-user-circle"></i>
            </a>
        )
    }

    hienThiThongTinUser(e){
        e.preventDefault();
        this.setState({
            hienThiUser : !this.state.hienThiUser
        })
    }

    logOut(e){
        e.preventDefault();
        this.props.logout();
        localStorage.removeItem('token')
        this.setState({
            hienThiUser : !this.state.hienThiUser
        })
    }

    checkHienThiUser(){
        if(this.state.hienThiUser === true){
            return (
                <ul className="inforUser">
                    <li onClick={(e) =>this.hienThiThongTinUser(e)}><Link to="/infor">Thông tin tài khoản</Link></li>
                    <li onClick={(e) =>this.hienThiThongTinUser(e)}><Link to="/infor">Đơn hàng của tôi</Link></li>
                    <li onClick={(e) =>this.logOut(e)}>Đăng xuất</li>
                </ul>
            )
        }
    }
  render(){
    return (
      <Fragment>
        {   
            this.kiemTraDangNhap()
        }
        {
            this.checkHienThiUser()
        }
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(ValidateLogin)
