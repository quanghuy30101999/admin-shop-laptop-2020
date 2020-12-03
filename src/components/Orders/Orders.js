import { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Order extends Component {
  render(){
    let orders = this.props.orders.map((order, index) => {
      return(
        <tr key={index} >
          <th scope="row">
            <div className="media align-items-center">
              
              {/* <a href="#" className="avatar rounded-circle mr-3">
                <img alt="Image placeholder" src={`../assets/img/theme/${category.img}`} />
              </a> */}
              <div className="media-body">
                <span className="name mb-0 text-sm">{order.user_name}</span>
              </div>
            </div>
          </th>
          <td className="budget">
            {order.subtotal}
          </td>
          <td className="budget">
            {order.phone}
          </td>
          <td className="budget">
            {order.address}
          </td>
          <td className="budget">
            {order.created_at}
          </td>
          <td className="budget">
            {order.status}
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
        {/* Light table */}
        <button type="button" class="btn btn-success">New Orders</button>
            
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="sort" data-sort="name">User</th>
                    <th scope="col" className="sort" data-sort="budget">Subtotal</th>
                    <th scope="col" className="sort" data-sort="status">Phone</th>
                    <th scope="col" className="sort" data-sort="status">Address</th>
                    <th scope="col" className="sort" data-sort="status">Time Order</th>
                    <th scope="col" className="sort" data-sort="status">Status</th>
                    <th scope="col" className="sort" data-sort="status">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody className="list">
                    {orders}
                </tbody>
              </table>
            </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return{
    orders: state.orders
  }
}

export default connect(mapStateToProps, null)(Order)