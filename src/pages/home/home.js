import { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './css/header.css'
import './css/listproduct.css'
import ValidateLogin from './ValidateLogin'
import ListProducts from './ListProducts'
import { connect } from 'react-redux'
import { getCart } from '../../actions/cart/login.action'


class Home extends Component {
    constructor(props) {
        super(props);
        this.cart_id = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')).user.cart.id : '';
    }
    componentDidMount() {
        this.props.getCart(this.cart_id)
    }
    render() {
        return (
            <Fragment>
                {/* Header */}
                <div className="header">
                    <ValidateLogin />
                    <div className="bottom">
                        <a href="/" className="traii">
                            <i className="fa fa-home" />
                            <span>BKLaptop</span>
                        </a>
                        <div className="search">
                            <input type="text" placeholder="Nhập từ khóa cần tìm" className="txtSearch" />
                            <a href="/"><i className="fa fa-search" /></a>
                        </div>
                        <Link className="cart" to="/shoppingCart">
                            <i className="fa fa-shopping-cart"> Giỏ hàng</i>
                            <span className="soluong">{this.props.cart.length}</span>
                        </Link>
                    </div>
                </div>
                {/* End Header */}
                {/* List Product */}
                    <ListProducts />
                {/* End List Product */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    getCart: cart_id => dispatch(getCart(cart_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
