import { Component, Fragment } from 'react'
import './css/header.css'
import './css/listproduct.css'
import { connect } from 'react-redux'
import { getProductAPI } from '../../actions/products/product.action'
import { addToCartAPI } from './../../actions/cart/addToCart'
import { Redirect } from 'react-router-dom'

class ListProducts extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            addToCart: false
        }
    }
   
    componentDidMount() {
        this.props.getProducts();
    }

    addToCart = (data) => {
        return e => {
          let { login } = this.props;
          if(login){
              this.props.AddToCart(data);
              this.setState({
                  addToCart: true
              })
          }
          else
          {
              this.setState({
                  redirect: true
              })
          }
        } 
           
      }
    
    render() {
        let { redirect, addToCart } = this.state;
        if (redirect) {
            return <Redirect to="/login" />
        }
        if (addToCart) {
            // return <Redirect to="/shoppingCart"/>
        }
        let product = this.props.products.map((product, index) => {
            let img = `https://shop-laptop-2020.herokuapp.com/${product.picture.url}`
            return (
                <div className="col-sm-4 mb-2 motsp">
                    <div className="card ">
                        <img src={img} alt="" className="img-fluid myimamge" />
                        <div className="card-block ttsp">
                            <a href="/" className="tdspkhac">{product.name}</a>
                            <b>{product.price}</b>
                            <div className="btn btn-outline-info btn-block addCart" onClick={this.addToCart(product)}>Thêm vào giỏ hàng</div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <Fragment>
                {/* List Product */}
                <div className="container card card-block col-sm-8" id="noidung">
                    <div className="row dssanpham col-sm-12">
                        <div className="row sanphamkhac">
                            <div className="col-sm-12 ">
                                <h3 className="tdto">Danh sách sản phẩm</h3>
                            </div>
                            {product}
                        </div>
                    </div>
                </div>
                {/* End List Product */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    login: state.login
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProductAPI()),
    AddToCart: data => dispatch(addToCartAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts)
