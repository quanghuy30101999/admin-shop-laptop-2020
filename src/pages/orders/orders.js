import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { createOrderAPI } from '../../actions/orders/orders.action'

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
        if(this.state.order_success){
            return <Redirect to="/"/>
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

        

        return (
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

                    <div className="row dssanpham col-sm-12">
                        {order}
                        <h1 className="trai">Tổng thanh toán:     {this.props.orders.subtotal}VND</h1>
                    </div>
                    <div className="row dssanpham col-sm-12">
                        <form>
                            <label htmlFor="fname">Name:</label><br />
                            <input type="text" id="fname" name="user_name" value={this.state.user_name} onChange={this.handleChange} /><br />
                            <label htmlFor="lname">Phone:</label><br />
                            <input type="text" id="lname" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            <label htmlFor="lname">Adress:</label><br />
                            <input type="text" id="lname" name="address" value={this.state.address} onChange={this.handleChange}/><br />
                        </form>
                        <div className="btn btn-block btn-danger" onClick={this.order}>Mua hàng</div>
                    </div>
                </div>
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
    createOrderAPI: (result, subtotal, user_id, user) => dispatch(createOrderAPI(result, subtotal, user_id, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)