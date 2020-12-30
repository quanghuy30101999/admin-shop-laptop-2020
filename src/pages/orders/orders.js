import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { createOrderAPI } from '../../actions/orders/orders.action'
import Header from '../home/Header';
import Footer from '../home/Footer';
import PaypalButton from "./PaypalButton";
import { paypalAPI } from "../../actions/paypal/paypal.action";
// import axios from 'axios'
class Orders extends Component {
    constructor(props) {
        super()
        this.state = {
            user_name: props.orders.user.name,
            phone: props.orders.user.phone,
            address: props.orders.user.address,
            order_success: false
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        // const token = JSON.parse(localStorage.getItem('token')).token
        // const user_id = JSON.parse(localStorage.getItem('token')).user.id
        // const cart = axios.get(`https://shop-laptop-2020.herokuapp.com/v1/users/${user_id}/cart`, {
        //     headers: { Authorization: token }
        // }).then(function (response) {
        //     console.log(response.data);
        // })

        if (this.state.order_success) {
            window.setTimeout(() => {
                window.location.href = '/shoppingCart'
            }, 2000);
        }
        let order = this.props.orders.order_item_ids.map((cart, index) => {
            return (
                <div className="row motsanpham">
                    <div className="col-sm-3">
                        <img src="images/1.jpg" alt="" className="img-fluid myimage" />
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
                        <span className="soluongsp"> x{cart.quantity}</span>
                    </div>
                </div>
            )
        })

        const tranSuccess = async (payment) => {
            console.log(payment);
            this.props.paypalAPI(payment);
            let { subtotal } = this.props.orders;
            let user_id = this.props.orders.user.id;
            let user = this.state;
            let result = []
            this.props.orders.order_item_ids.map((order, index) => {
                result.push(order.id)
            })
            this.props.createOrderAPI(result, subtotal, user_id, user)
            this.setState({
                order_success: true
            })
            alert("You have successfully placed an order.")
        }

        return (
            <div>
                <Header />
                <div className="container pt-2 card card-block col-sm-10" id="noidunggiohang">
                    <div className="row tieude col-sm-12">
                        <div>
                            <a href="/" style={{ color: 'blue' }}> &lt; Mua thêm sản phẩm khác</a>
                        </div>
                        <div style={{ marginLeft: '480px' }}>
                            Đơn hàng của bạn
            </div>
                    </div>
                    <hr />
                    <div className="row col-sm-12">

                        <div className="row dssanpham col-sm-8">
                            <div className="card card-block">
                                {order}
                            </div>
                        </div>

                        <div className="col-sm-4" id="tinhgia">
                            <div className="divtrang card card-block">
                                <div className="thanhtien">
                                    <div className="phai float-xs-right">
                                        <div className="trai">Thành tiền</div>
                                        <div className="todo">{this.props.orders.subtotal}đ</div>
                                        <div className="gom">(Đã bao gồm VAT nếu có)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-group mb-2">
                                <label className="label_input lbtt" htmlFor="" >Name :</label>
                                <input type="text"
                                    className="form-control " onChange={this.handleChange} value={this.state.user_name} name="user_name" placeholder="Nhập tên" />
                            </div>
                            <div className="btn-group mb-2">
                                <label className="label_input lbtt" htmlFor="" >Phone :</label>
                                <input type="text"
                                    className="form-control  " onChange={this.handleChange} value={this.state.phone} name="phone" placeholder="Nhập tên" />
                            </div>
                            <div className="btn-group mb-2">
                                <label className="label_input lbtt" htmlFor="" >Address :</label>
                                <input type="text"
                                    className="form-control " value={this.state.address} onChange={this.handleChange} name="address" placeholder="Nhập tên" />
                            </div>
                            <div className="btn btn-block btn-danger" style={{width : '51%',marginLeft : '33%'}}  onClick={this.order}>Mua hàng</div>
                            <div className="total" style={{marginLeft : '23px',marginTop : '10px',height: '50px'}}>
                                <PaypalButton tranSuccess={tranSuccess} total={this.props.orders.subtotal / 23000} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    order = (e) => {
        let { subtotal } = this.props.orders;
        let user_id = this.props.orders.user.id;
        let user = this.state;
        let result = []
        this.props.orders.order_item_ids.map((order, index) => {
            result.push(order.id)
        })
        this.props.createOrderAPI(result, subtotal, user_id, user)
        this.setState({
            order_success: true
        })
    }
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    createOrderAPI: (result, subtotal, user_id, user) => dispatch(createOrderAPI(result, subtotal, user_id, user)),
    paypalAPI: (payment) => dispatch(paypalAPI(payment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)