import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProductAPI } from '../../actions/products/product.action'
import '../../App.css'
import DetailProduct from './detailProduct'
import "./detailProduct.css"
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiDetail } from 'react-icons/bi';
import axios from 'axios'
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
            checkEdit: []
        }
    }
    componentDidMount() {
        this.props.getProducts();
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
    editProduct(x) {
        // const arrCheck = [];
        // for (var i = 0; i < x; i++) {
        //     arrCheck[i] = "false";
        // }
        // arrCheck[x] = "true";
        // console.log(x)
        // console.log(this.state)
        // this.setState({
        //     checkEdit: arrCheck,
        //     id: this.state.list[x].id,
        //     category: this.state.list[x].category.id,
        //     name: this.state.list[x].name,
        //     price: this.state.list[x].price,
        //     ram: this.state.list[x].ram,
        //     quantity: this.state.list[x].quantity
        // })
        // console.log(this.state.list[x])
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
    update(key) {
        const arrCheck = [];
        for (var i = 0; i < key; i++) {
            arrCheck[i] = "false";
        }
        this.setState({
            checkEdit: arrCheck,
            status: true,
            reload: true
        })
        return (dispatch) => {
            axios({
                method: 'PUT',
                url: `https://shop-laptop-2020.herokuapp.com/v1/products/${this.state.id}`,
                data: {
                    category_id: this.state.category,
                    name: this.state.name,
                    price: this.state.price,
                    quantity: this.state.quantity,
                    ram: this.state.ram
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': JSON.parse(localStorage.getItem('token'))['token']
                }
            }).then(response => {
                console.log(response.data);
            }).then(error => {
                console.log(error);
            });
        };
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
    delete(id) {
        // const iteam = {
        //     "id": this.state.id,
        //     "name": this.state.name,
        //     "price": this.state.price,
        //     "ram": this.state.ram,
        //     "quantity": this.state.quantity,
        // }
        // return (event) => {
        //     console.log(iteam);
        //     axios.delete(`https://shop-laptop-2020.herokuapp.com/v1/products/${id}`, {

        //     })
        //         .then(repos => {
        //             console.log(iteam);
        //             window.location.reload()

        //         }).catch(err => {
        //             console.log("error")
        //         })
        //     this.setState({
        //         status: !this.state.status
        //     })
        // }
    }
    render() {
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
                        <button class="btn btn-danger" onClick={this.delete(product.id)}><RiDeleteBin6Line /></button>
                        {/* BEGIN DETAILS PRODUCT */}
                        {(this.state.checkDetail[index] === "true") && <div class="main-detail-product">
                            <ul class="detail-product">
                                <button onClick={this.cancel_form(this.state.list.length)} class="btn-cancer"> x </button>
                                <DetailProduct res={product} />
                            </ul>
                        </div>}
                        {/* END DETAILS PRODUCT */}

                        {/* BEGIN EDIT PRODUCT */}
                        {(this.state.checkEdit[index] === "true") &&
                            <div class="form-edit">
                                <ul class="edit">
                                    <div><h1>Chỉnh sửa</h1></div>
                                    <li>
                                        <p>Dòng Máy</p>
                                        <select value={this.state.category} onChange={this.changeCategory()} >
                                            {/* <option value="3"> Macbook</option>
                                                    <option value="2">Dell</option>
                                                    <option value="1">HP</option> */}
                                            {this.state.listC.map((resC, index) => {
                                                return <option value={resC.id}>{resC.name}</option>
                                            })}
                                        </select>
                                    </li>
                                    <li> <label>Name</label><input value={this.state.name} type="edit" onChange={event => this.changeValueEditName(event)}></input></li>
                                    <li> <label>Price</label><input value={this.state.price} type="edit" onChange={event => this.changeValueEditPrice(event)}></input></li>
                                    <li> <label>quantity</label><input value={this.state.quantity} type="edit" onChange={event => this.changeValueEditQuantity(event)}></input></li>
                                    <li> <label>RAM</label><input value={this.state.ram} type="edit" onChange={event => this.changeValueEditRam(event)}></input></li>
                                    <button class="xac-nhan" onClick={this.update(index)}>Xác nhận</button>
                                    <button class="huy" onClick={this.close(index)}>Hủy</button>
                                </ul>
                            </div>}
                        {/* END EDIT PRODUCT */}
                    </td>
                </tr>
            )
        })
        return (
            <Fragment>
                <button type="button" class="btn btn-success" > New Product</button>

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
    getProducts: () => dispatch(getProductAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)