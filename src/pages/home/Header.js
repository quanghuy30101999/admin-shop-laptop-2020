import React, { Component } from 'react';
import { connect } from 'react-redux'
import ValidateLogin from './ValidateLogin'
import { Link, Redirect } from 'react-router-dom'
import {getCart} from '../../actions/cart/login.action'
import {findProductAPI} from '../../actions/products/findProduct.action'
class Header extends Component {
    constructor(props) {
        super(props);
        this.cart_id = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')).user.cart.id : '';
    }
    componentDidMount() {
        this.props.getCart(this.cart_id)
    }
    findProduct = (e)=> {
        console.log(e.target.value);
        this.props.findProduct(e.target.value)
    }
    render() {
        return (
            <div className="header">
            <ValidateLogin />
            <div className="bottom">
                <a href="/" className="traii">
                    <i className="fa fa-home" />
                    <span>BKLaptop</span>
                </a>
                <div className="search">
                    <input type="text" placeholder="Nhập từ khóa cần tìm" className="txtSearch" onChange={(e)=>this.findProduct(e)}/>
                    <a href="/"><i className="fa fa-search" /></a>
                </div>
                <Link className="cart" to="/shoppingCart">
                    <i className="fa fa-shopping-cart"> Giỏ hàng</i>
                    <span className="soluong">{localStorage.getItem('token') != null ? this.props.cart.length : 0 }</span>
                </Link>
            </div>
        </div>
        );
    }
}
const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    getCart: cart_id => dispatch(getCart(cart_id)),
    findProduct : key => dispatch(findProductAPI(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)