import { Component, Fragment } from 'react'
import './Categories.css'
import { connect } from 'react-redux'
import { getCategoriesAPI } from '../../actions/categories/category.action'
class Category extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render(){
    let categories = this.props.categories.map((category, index) => {
      return(
        <tr key={index} >
          <th scope="row">
            <div className="media align-items-center">
              
              <div className="media-body">
                <span className="name mb-0 text-sm">{category.name}</span>
              </div>
            </div>
          </th>
          <td className="budget">
            {category.description}
          </td>
          <td>
            <button type="button" class="btn btn-info">Details</button>
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <Fragment>
            {/* Light table */}
            <button type="button" class="btn btn-success">New Category</button>
            
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="sort" data-sort="name">Name</th>
                    <th scope="col" className="sort" data-sort="budget">Description</th>
                    <th scope="col" className="sort" data-sort="status">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="list">
                    {categories}
                </tbody>
              </table>
            </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)