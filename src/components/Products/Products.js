import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProductAPI } from '../../actions/products/product.action'
import '../../App.css'
import DetailProduct from './detailProduct'
import "./detailProduct.css"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiDetail } from 'react-icons/bi';
import { updateProductAPI } from '../../actions/products/product.action'
import NewProduct from './NewProduct'
import { Redirect } from 'react-router-dom'
import { deleteProductAPI } from '../../actions/products/deleteProduct.action'

class Product extends Component {
    constructor() {
        super();
        this.state = {
            statusAddProduct: false,
            category: "",
            listC: [],
            list: [],
            msg: {},
            name: '',
            price: '',
            quantity: '',
            ram: '',
            checkDetail: [],
            list: [],
            checkEdit: [],
        }
    }
    componentDidMount() {
        this.props.getProducts();
    }
    onClick = () => {
        this.setState({ statusAddProduct: true })
    }
    // begin details product
    detailProduct(x) {
        const arrCheck = [];
        for (var i = 0; i < x; i++) {
            arrCheck[i] = "false";
        }
        arrCheck[x] = "true";
        return (event) => {
            this.setState({
                checkDetail: arrCheck,
            })

        }
    }
    cancel_form(le) {
        const arrCheck = []
        for (let i = 0; i < le; i++) {
            arrCheck[i] = "false"
        }
        return e => {
            this.setState({
                checkDetail: arrCheck,
                showlist: true
            })
        }
    }
    // end details product

    // Begin Edit Product
    editProduct = (index) => {
        const arrCheck = [];
        for (var i = 0; i < index; i++) {
            arrCheck[i] = "false";
        }
        arrCheck[index] = "true";
        return (event) => {
            this.setState({
                checkEdit: arrCheck,
                id: this.props.products[index].id,
                category: this.props.products[index].category.id,
                name: this.props.products[index].name,
                price: this.props.products[index].price,
                ram: this.props.products[index].ram,
                quantity: this.props.products[index].quantity,
            })
        }
    }
    changeCategory(e) {
        return e => {
            this.setState({
                category: e.target.value
            })

        }
    }
    changeValueEditName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    changeValueEditPrice = (event) => {
        this.setState({
            price: event.target.value,
        })
    }
    changeValueEditRam = (event) => {
        this.setState({
            ram: event.target.value,
        })
    }
    changeValueEditQuantity = (event) => {
        this.setState({
            quantity: event.target.value,
        })
    }
    update = (key) => {
        const arrCheck = [];
        for (var i = 0; i < key; i++) {
            arrCheck[i] = "false";
        }

        this.props.updateProduct(this.state)

        this.setState({
            checkEdit: arrCheck,
            status: true,
            reload: true,
        })
    }
    close(key) {
        const arrCheck = [];
        for (var i = 0; i < key; i++) {
            arrCheck[i] = "false";
        }
        return (event) => {
            this.setState({
                checkEdit: arrCheck,
                statusAddProduct: false,
                msg: ''
            })
        }
    }
    // End Edit Product
    delete = (id) => {
        this.props.deleteProductAPI(id);
    }
    render() {
        let { statusAddProduct } = this.state;
        if (statusAddProduct) {
            return <Redirect to="/products/new" component={NewProduct} />
        }
        let products = this.props.products.map((product, index) => {
            return (
                <tr key={index} >
                    <th scope="row">
                        <div className="media align-items-center">

                            <div className="media-body">
                                <span className="name mb-0 text-sm">{product.name}</span>
                            </div>
                        </div>
                    </th>
                    <td className="budget">
                        {product.price}
                    </td>
                    <td className="budget">
                        {product.quantity}
                    </td>
                    <td className="budget">
                        {product.ram}
                    </td>
                    <td className="budget">
                        {product.memory}
                    </td>
                    <td className="budget">
                        {product.description}
                    </td>
                    <td>
                        <button class="btn btn-info" onClick={this.detailProduct(index)}><BiDetail /></button>
                        <button class="btn btn-warning" onClick={this.editProduct(index)}><BiEdit /></button>
                        <button class="btn btn-danger" onClick={() => this.delete(product.id)}><RiDeleteBin6Line /></button>
                        {/* BEGIN DETAILS PRODUCT */}
                        {(this.state.checkDetail[index] === "true") && <div class="main-detail-product">
                            <ul class="detail-product">
                                <button onClick={this.cancel_form(this.state.list.length)} class="btn-cancer"> x </button>
                                <DetailProduct res={product} />
                            </ul>
                        </div>}
                        {/* END DETAILS PRODUCT */}

                        {/* BEGIN EDIT PRODUCT */}
                        {(this.state.checkEdit[index] === "true") && <div class="form-edit">
                            <h1>EDIT PRODUCT</h1>
                            <ul class="edit">
                                <div><h1>Chỉnh sửa</h1></div>
                                <li>
                                    <p>Dòng</p>
                                    <select value={this.state.category} onChange={this.changeCategory()} >
                                        <option value="3"> Macbook</option>
                                        <option value="2">Dell</option>
                                        <option value="1">HP</option>
                                        {this.state.listC.map((resC, key) => {
                                            return <option value={resC.id}>{resC.name}</option>
                                        })}
                                    </select>
                                </li>
                                <li> <label>Name</label><input value={this.state.name} type="edit" onChange={event => this.changeValueEditName(event)}></input></li>
                                <li> <label>Price</label><input value={this.state.price} type="edit" onChange={event => this.changeValueEditPrice(event)}></input></li>
                                <li> <label>quantity</label><input value={this.state.quantity} type="edit" onChange={event => this.changeValueEditQuantity(event)}></input></li>
                                <li> <label>RAM</label><input value={this.state.ram} type="edit" onChange={event => this.changeValueEditRam(event)}></input></li>
                                <button onClick={() => this.update(index)} class="btn btn-success"> Xác nhận </button>
                                <button class="btn btn-danger" onClick={this.close(index)}>Hủy</button>
                            </ul>
                        </div>}
                        {/* END EDIT PRODUCT */}
                    </td>
                </tr>
            )
        })
        return (
            <Fragment>
                <button type="button" class="btn btn-success" onClick={this.onClick}> New Product</button>

                <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="sort" data-sort="name">Name</th>
                                <th scope="col" className="sort" data-sort="budget">Price</th>
                                <th scope="col" className="sort" data-sort="status">Quantity</th>
                                <th scope="col" className="sort" data-sort="status">RAM</th>
                                <th scope="col" className="sort" data-sort="status">MEMORY</th>
                                <th scope="col" className="sort" data-sort="status">Description</th>
                                <th scope="col" className="sort" data-sort="status">Action</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody className="list">
                            {products}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProductAPI()),
    updateProduct: (data) => dispatch(updateProductAPI(data)),
    deleteProductAPI: (id) => dispatch(deleteProductAPI(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)