import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getCart } from '../../../actions/cart/login.action'
import { updateCartAPI } from '../../../actions/cart/updateCart'
import UserOrders from '../../../pages/orders/orders'
import {Link} from 'react-router-dom'
import Header from '../Header';
import { deleteCartAPI } from '../../../actions/cart/deleteCart';

class DataCart extends Component {

    constructor(props) {
        super(props);
        this.cart_id = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')).user.cart.id : '';
        this.state = {
            order_item_ids: [],
            subtotal: 0,
            user: {},
            onRedirect: false
        }
    }

    componentDidMount() {
        this.props.getCart(this.cart_id)
    }

    setTien = (id, e) => {
        this.props.updateCartAPI(id, e.target.value)
    }
    deleteCart= (id)=>{
        this.props.deleteCartAPI(id);
    }


    render() {
        let { onRedirect } = this.state;
        if (onRedirect) {
            return <UserOrders orders={this.state} />
        }
        var sum = 0;
        let cart = this.props.cart.map((cart, index) => {
            sum += cart.quantity * cart.unit_price
            console.log(cart);
            // let img = `https://shop-laptop-2020.herokuapp.com${cart.picture.url}`
            return (
                <div className="row motsanpham">
                    <div className="col-sm-3">
                        <img src alt="" className="img-fluid myimage" />
                        <div className="btn-group pt-2">
                            <div className="btn btn-outline-danger xoasp" onClick={()=>this.deleteCart(cart.id)} style={{ marginLeft: '40px' }}>Delete</div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <a href="/" className="tieude">{cart.product_name}</a>
                        <div className="noidungsp " style={{ fontWeight: 'bold' }}>
                            Balo laptop 13"3 inch Tucano WOV-MB133 <br />
                            Giam giá 1.000.000đ <br />
                            Pin sạc dự phòng giảm 30% khi mua kèm <br />
                            Mua kèm microfosft 365 Personal giá chỉ 690.00đ <br />
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="gia1">{cart.unit_price}</div>
                    </div>
                    <div className="col-sm-3">
                        <input type="number" name="" id="" onChange={(e) => this.setTien(cart.id, e)} className="soluongsp" min={1} defaultValue={cart.quantity} />
                    </div>
                </div>
            )
        })

        return (
            <Fragment>
                <Header />
                <div className="container pt-2 card card-block col-sm-10" id="noidunggiohang">
                    <div className="row tieude col-sm-12">
                        <div>
                            <a href="/" style={{ color: 'blue' }}> &lt; Mua thêm sản phẩm khác</a>
                        </div>
                        <div style={{ marginLeft: '480px' }}>
                            Giỏ hàng của bạn
            </div>
                    </div>
                    <hr />
                    <div className="row col-sm-12">

                        <div className="row dssanpham col-sm-8">
                            <div className="card card-block">
                                {cart}
                            </div>
                        </div>

                        <div className="col-sm-4" id="tinhgia">
                            <div className="divtrang card card-block">
                                <div className="thanhtien">
                                    <div className="phai float-xs-right">
                                        <div className="trai">Thành tiền</div>
                                        <div className="todo">{sum}đ</div>
                                        <div className="gom">(Đã bao gồm VAT nếu có)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn btn-block btn-danger" onClick={(e) => this.order(e, sum)}>Tiến hành đặt hàng</div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }

    order = (e, sum) => {
        let user = JSON.parse(localStorage.getItem('token')).user
        this.setState({
            order_item_ids: this.props.cart,
            subtotal: sum,
            user: user,
            onRedirect: true
        })
    }

}


const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    getCart: cart_id => dispatch(getCart(cart_id)),
    updateCartAPI: (id, price) => dispatch(updateCartAPI(id, price)),
    deleteCartAPI : (id) =>dispatch(deleteCartAPI(id))
    // createOrderAPI: (result, sum, user) => dispatch(createOrderAPI(result, sum, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataCart)