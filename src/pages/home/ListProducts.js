import { Component, Fragment } from 'react'
import './css/header.css'
import './css/listproduct.css'
import { connect } from 'react-redux'
import { getProductAPI } from '../../actions/products/product.action'
import { addToCartAPI } from './../../actions/cart/addToCart'
import { Redirect } from 'react-router-dom'
import { findProductFromCate } from '../../actions/products/findProductFromCate'
import {getCategoriesAPI} from '../../actions/categories/category.action'
import './css/sidebar.css'
class ListProducts extends Component {
    constructor(){
        super();
        this.state = {
            tu : '',
            den : '',
            redirect: false,
            addToCart: false
        };
    }
    find =  (e,id) =>{
        e.preventDefault();
        this.props.getProducts(id);
    }
    componentDidMount() {
        this.props.getCate();
        this.props.getProduct();
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
    isChange  = (e) =>{
        this.setState({
            aa: this.props.products.sort((a ,b) => { return e.target.value === '1' ? a.price - b.price : b.price - a.price})
        })
    }
    isChange1 =  (e) =>{
        const name =e.target.name;
        const value =e.target.value;
        this.setState({
            [name] : value
        })
    }
    findSP =  () =>{
        const item= [];
        if(this.state.den === '' && this.state.tu === ''){
           return ;
        }
        else if(this.state.den === '' && this.state.tu !== ''){
            this.props.products.map((x,y)=>{
                if( x.price >= parseInt(this.state.tu)){
                    item.push(x);
                }
            })
        }
        else if(this.state.tu === '' && this.state.den !== ''){
        this.props.products.map((x,y)=>{
            if( x.price <= parseInt(this.state.den) ){
                item.push(x);
            }
        })
    }
        else if(this.state.tu !== '' && this.state.den !== ''){
            this.props.products.map((x,y)=>{
                if( x.price <= parseInt(this.state.den) && x.price >= parseInt(this.state.tu)){
                    item.push(x);
                }
            })
        }
        this.props.products.splice(0,this.props.products.length)
        item.map((x,y)=>{
            this.props.products.push(x);
        })
        this.setState({
            aa: this.props.products
        })
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
            let img = `https://shop-laptop-2020.herokuapp.com${product.picture.url}`
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
                <div className="row">
                    <div className="sidebar col-sm-3">
                    <div className="card border-dark mb-3 danhmuc" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-center tieude1">DANH MỤC SẢN PHẨM</div>
                        <div className="card-body text-dark">
                        <ul>
                            {this.props.categories.map((x,y)=> {
                                return(
                                    <a href="#" className="dmct" key={y} onClick={(e)=>this.find(e,x.id)}><li className="dmct">{x.name}</li></a>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="card border-dark mb-3 loc" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-center tieude1">LỌC TÌM SẢN PHẨM</div>
                        <div className="card-body text-dark">
                        <div className="btn-group mb-4">
                            <label className="label_input tu" >Từ :</label>
                            <input type="text" className="form-control locloc" name="tu" onChange={(e) =>this.isChange1(e)}/>
                        </div>
                        <div className="btn-group mb-4">
                            <label className="label_input tu" >Đến :</label>
                            <input type="text" className="form-control locloc" name="den" onChange={(e) =>this.isChange1(e)}/>
                        </div>
                        </div>
                        <div className="btn btn-primary timsp " onClick={()=>this.findSP()}>Tìm</div>
                    </div>
                    </div>

                    <div className="container card card-block col-sm-8" id="noidung">
                    <div className="row dssanpham col-sm-12">
                        <div className="row sanphamkhac">
                            <div className="col-sm-12 ">
                                <h3 className="tdto">Danh sách sản phẩm</h3>
                                <div className="btn-group chongiaa mb-2">
                                <label className="label_input ">Giá :</label>
                                <select  onChange={(e) =>this.isChange(e)}  className="form-control chongia" name="gia" >
                                    <option  value="1">Tăng</option>
                                    <option  value="2">Giảm</option>
                                </select>
                                </div>
                            </div>
                            {product}
                        </div>
                    </div>
                    </div>
                     {/* End List Product */}
                </div>
                
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    login: state.login,
    categories : state.categories
})

const mapDispatchToProps = dispatch => ({
    getProduct: () => dispatch(getProductAPI()),
    AddToCart: data => dispatch(addToCartAPI(data)),
    getProducts: id => dispatch(findProductFromCate(id)),
    getCate : ()=> dispatch(getCategoriesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts)
