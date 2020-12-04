import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProductAPI } from '../../actions/products/product.action'

class Product extends Component {
  componentDidMount() {
    this.props.getProducts();
}
  render(){
    let products = this.props.products.map((product, index) => {
      return(
        <tr key={index} >
          <th scope="row">
            <div className="media align-items-center">
              
              {/* <a href="#" className="avatar rounded-circle mr-3">
                <img alt="Image placeholder" src={`../assets/img/theme/${category.img}`} />
              </a> */}
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
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <Fragment>
        <button type="button" class="btn btn-success">New Product</button>
            
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