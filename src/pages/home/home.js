import { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './css/header.css'
import './css/listproduct.css'
import { connect } from 'react-redux'
import { getProductAPI } from '../../actions/products/product.action'
import ValidateLogin from './ValidateLogin'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }
   
    componentDidMount() {
        this.props.getProducts();
    }
    
    addToCart = () => {
        let { login } = this.props;
        if(login){
            
        }
        else
        {
            this.setState({
                redirect: true
            })
        }
         
    }
    render() {
        let {redirect} = this.state;
        if(redirect){
            return <Redirect to="/login"/>
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
                            <div className="btn btn-outline-info btn-block addCart" onClick={this.addToCart}>Thêm vào giỏ hàng</div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <Fragment>
                {/* Header */}
                <div className="header">
                    <ValidateLogin/>
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
                            <span className="soluong">0</span>
                        </Link>
                    </div>
                </div>
                {/* End Header */}
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
    getProducts: () => dispatch(getProductAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
