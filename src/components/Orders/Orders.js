import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getOrdersAPI } from '../../actions/orders/orders.action'
import { doneOrderAPI } from '../../actions/orders/doneOrder'
import { approveOrderAPI } from '../../actions/orders/orders.action'
import { denyOrderAPI } from '../../actions/orders/denyOrder '

class Order extends Component {
  constructor() {
    super();
    this.state = {
      statusAddProduct: false,
    }
  }
  componentDidMount() {
    this.props.getOrders();
  }

  onClick = () => {
    this.setState({ statusAddProduct: true })
  }

  onDone = (id) => {
    this.props.doneOrderAPI(id);
  }

  onApproved = (id) => {
    this.props.approveOrderAPI(id);
  }

  onDeny = (id) => {
    this.props.denyOrderAPI(id);
  }

  checkStatus = (id, status) => {
    if (status === 'pending') {
      return (
        <Fragment>
          <button type="button" class="btn btn-danger" onClick={() => this.onDeny(id)}>Deny</button>
          <button type="button" class="btn btn-success" onClick={() => this.onApproved(id)}>Approve</button>
        </Fragment>
      )
    }
    else if (status === 'shipping') {
      return <button type="button" class="btn btn-primary" onClick={() => this.onDone(id)}>Done</button>
    }
    else {
      return null
    }
  }

  render() {
    console.log(this.props.orders);
    let orders = this.props.orders.map((order, index) => {
      return (
        <tr key={index} >
          <th scope="row">
            <div className="media align-items-center">
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
            <button type="button" class="btn btn-info">Detail</button>
            {this.checkStatus(order.id, order.status)}
          </td>
        </tr>
      )
    })
    return (
      <Fragment>
        {/* Light table */}
        <button type="button" class="btn btn-success" onClick={this.onClick}>New Order</button>
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
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(getOrdersAPI()),
  doneOrderAPI: (id) => dispatch(doneOrderAPI(id)),
  approveOrderAPI: (id) => dispatch(approveOrderAPI(id)),
  denyOrderAPI: (id) => dispatch(denyOrderAPI(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Order)