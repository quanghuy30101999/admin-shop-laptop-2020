import React, { Component } from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import axios from 'axios';
import { connect } from 'react-redux'
import { getHistoryOrder } from '../../actions/orders/getHistoryOrder';
class HistoryOrder extends Component {

    constructor(props) {
        super(props);
        this.id_user = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token')).user.cart.id : '';
    }
    
    componentDidMount(){
        this.props.getHistoryOr(this.id_user);
    }
    cancelOrder=(e,id_order)=>{
        e.preventDefault();
        axios({
            method: 'PATCH',
            url: `https://shop-laptop-2020.herokuapp.com/v1/orders/${id_order}/cancel`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token'))['token'] : ''
            }
          }).then(res=>{
            alert('Hủy đơn hàng thành công');
            this.props.getHistoryOr(this.id_user);
          }).then(error => {
              console.log(error);
        });
    }
    check(status,id){
        if(status === "pending"){
            return (
                <a href="#" className="btn btn-block btn-success" onClick={(e)=>this.cancelOrder(e,id)}>Hủy đơn hàng</a>
            )
        }
    }
   
    render() {
        return (
            <div>
                <Header />
            <div className="container pt-2 card card-block col-sm-10" id="noidunggiohang">
                <div className="row tieude col-sm-12">
                    <div>
                        <a href="/" style={{ color: 'blue' }}> Quay lại</a>
                    </div>
                    <div style={{ marginLeft: '480px' }}>
                        Lịch sử mua hàng
                    </div>
                </div>
                <hr />
               
                { this.props.order.map((x,y)=>{
            
                    return (
                        <div className="row col-sm-12">
                        <div className="row dssanpham col-sm-8">
                        <div className="card card-block">
                            {x.order_items.map((item,index)=>{
                                return(
                                    <div className="row motsanpham">
                                    <div className="col-sm-3">
                                        <img src="images/1.jpg" alt="" className="img-fluid myimage" />
                                    </div>
                                    <div className="col-sm-4">
                                        <a href="/" className="tieude">{item.product_name}</a>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="gia1">{item.unit_price}</div>
                                    </div>
                                    <div className="col-sm-3">
                                        <span className="soluongsp"> x {item.quantity}</span>
                                    </div>
                                </div>
                                )
                            })}
                    
                        </div>
                    </div>

                    <div className="col-sm-4" id="tinhgia">
                        <div className="divtrang card card-block">
                            <div className="thanhtien">
                                <div className="phai float-xs-right">
                                    <div className="trai">Ngày đặt hàng : {x.created_at}</div>
                                    <div className="todo">Địa chỉ nhận: {x.address}</div>
                                    <div className="gom">Tổng tiền : {x.subtotal}đ</div>
                                    <div className="gom" style={{color:'red',fontWeight:'bold'}}>Trạng thái : {x.status}</div>
                                </div>
                            </div>
                        </div>
                        {this.check(x.status,x.id)}
                    </div>
                    <hr />
                    </div>
                    )
                })  
                }
                
            </div>
            <Footer />
            </div>
        );
        
    }
}

const mapStateToProps = state => ({
    order: state.orders
})

const mapDispatchToProps = dispatch => ({
    getHistoryOr: id=> dispatch(getHistoryOrder(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryOrder)