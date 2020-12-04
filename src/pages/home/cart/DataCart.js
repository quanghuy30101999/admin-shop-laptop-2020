import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCart } from '../../../actions/cart/login.action'
class DataCart extends Component {

    constructor(props) {
        super(props);
        this.cart_id = JSON.parse(localStorage.getItem('token')).user.cart.id;
    }

    componentDidMount() {
        this.props.getCart(this.cart_id)
    }
    render() {
        console.log(this.props.cart);
        let cart = this.props.cart.map((cart, index) => {
            return (
                <div className="row motsanpham">
                    <div className="col-sm-3">
                        <img src="images/1.jpg" alt="" className="img-fluid myimage" />
                        <div className="btn-group pt-2">
                            <div className="btn btn-outline-danger xoasp" style={{ marginLeft: '40px' }}>Delete</div>
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
                        <input type="number" name="" id="" className="soluongsp" min={1} defaultValue={1} />
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
                            <div className="dongtinhgia">
                                <div className="phai float-xs-right">453.000đ</div>
                                <div className="trai">Tạm tính</div>
                            </div>
                            <div className="thanhtien">
                                <div className="phai float-xs-right">
                                    <div className="todo">453.000đ</div>
                                    <div className="gom">(Đã bao gồm VAT nếu có)</div>
                                </div>
                                <div className="trai">Thành tiền</div>
                            </div>
                        </div>
                        <a href="#" className="btn btn-block btn-danger" >Tiến hành đặt hàng</a>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    getCart: cart_id => dispatch(getCart(cart_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataCart)