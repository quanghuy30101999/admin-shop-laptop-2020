import React, { Component } from 'react';
import './css/sidebar.css'
import { connect } from 'react-redux'
import { findProductFromCate } from '../../actions/products/findProductFromCate'
import {getCategoriesAPI} from '../../actions/categories/category.action'
class Sidebar extends Component {
    find =  (e,id) =>{
        e.preventDefault();
        this.props.getProducts(id);
    }
    componentDidMount(){
        this.props.getCate();
    }
    render() {
        return (
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
                        <label className="label_input tu" onChange={(e) =>this.isChange(e)}>Từ :</label>
                        <input type="text" className="form-control locloc" name="name" />
                    </div>
                    <div className="btn-group mb-4">
                        <label className="label_input tu" >Đến :</label>
                        <input type="text" className="form-control locloc" name="name" />
                    </div>
                    </div>
                </div>
                </div>

        );
    }
}
const mapStateToProps = state => ({
    categories : state.categories
})
const mapDispatchToProps = dispatch => ({
    getProducts: id => dispatch(findProductFromCate(id)),
    getCate : ()=> dispatch(getCategoriesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)