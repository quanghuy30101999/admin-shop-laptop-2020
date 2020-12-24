import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import { logout } from '../../actions/login/login.action'
import { connect } from 'react-redux'

class SideBar extends React.Component {
    logout_success() {
        localStorage.removeItem('token')
        window.location.href = "/"
    }
    render() {
        return (
            <div>
                <div class="List">
                    <li class="List-iteam">
                        <div class="action">
                            <div class="rotor">
                                <div class="LOGO-H1">
                                    <p >ADMIN</p>
                                </div>
                            </div>
                        </div>
                        <button class="log-out" onClick={this.logout_success}>LOG OUT</button>
                        <Link class="link" to="/Admin/static">Thống Kê</Link>
                        <Link class="link" to="/Admin/order">Đơn hàng</Link>
                        <Link class="link" to="/Admin/products">Sản phẩm</Link>
                        <Link class="link" to="/Admin/category">Danh mục</Link>
                        <Link class="link" to="/Admin/account">Tài khoản</Link>
                    </li>

                </div>

            </div >
        );


    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})
export default connect(null, mapDispatchToProps)(SideBar)
