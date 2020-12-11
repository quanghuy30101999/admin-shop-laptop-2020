import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createProductAPI } from '../../actions/products/product.action'
import { getCategoriesAPI } from '../../actions/categories/category.action'

class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_id: "",
            name: '',
            price: '',
            quantity: '',
            memory: '',
            description: '',
            ram: ''
        }
    }

    componentDidMount() {
        this.props.getCategoriesAPI();
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProductAPI(this.state);
    }
    render() {
        let category = this.props.categories.map((category, index) => {
            return (
                <option key={index} value={category.id}>{category.name}</option>);
        })
        let { name, price, quanlity, memory, description, ram } = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <select name="category_id" value={this.state.category_id} onChange={this.handleChange}>
                        {category}
                    </select>
                    <input className="form-control" placeholder="Name" required name="name"
                        onChange={this.handleChange}
                        value={name} />
                    <input className="form-control" placeholder="Price" required name="price"
                        onChange={this.handleChange}
                        value={price} />
                    <input className="form-control" placeholder="Quantity" required name="quantity"
                        onChange={this.handleChange}
                        value={quanlity} />
                    <input className="form-control" placeholder="Memory" required name="memory"
                        onChange={this.handleChange}
                        value={memory} />
                    <input className="form-control" placeholder="Ram" required name="ram"
                        onChange={this.handleChange}
                        value={ram} />
                    <input className="form-control" placeholder="Picture" name="picture"
                        onChange={this.handleChange}
                        value="" />
                    <input className="form-control" placeholder="Description" required name="description"
                        onChange={this.handleChange}
                        value={description} />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">Create</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    getCategoriesAPI: () => dispatch(getCategoriesAPI()),
    createProductAPI: (data) => dispatch(createProductAPI(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)