import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NewUser from './NewUser'
import { Redirect } from 'react-router-dom'
import { getUsersAPI } from '../../actions/users/users.action'

class Users extends Component {
  constructor(){
    super();
    this.state = {
      statusAddProduct: false
    }
  }
  componentDidMount() {
    this.props.getUsers();
  }

  onClick = () => {
    this.setState({statusAddProduct: true})
  }
  render() {
    let { statusAddProduct}= this.state;
    if(statusAddProduct){
      return <Redirect to="/users/new" component={NewUser}/>
    }
    let users = this.props.users.map((user, index) => {
      return (
        <tr key={index} >
          <th scope="row">
            <div className="media align-items-center">

              {/* <a href="#" className="avatar rounded-circle mr-3">
                <img alt="Image placeholder" src={`../assets/img/theme/${category.img}`} />
              </a> */}
              <div className="media-body">
                <span className="name mb-0 text-sm">{user.name}</span>
              </div>
            </div>
          </th>
          <td className="budget">
            {user.email}
          </td>
          <td className="budget">
            {user.phone}
          </td>
          <td className="budget">
            {user.address}
          </td>
          <td className="budget">
            {console.log(user)}
            {user.roles[user.roles.length - 1]}
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
        <button type="button" class="btn btn-success" onClick={this.onClick}>New User</button>
        <div className="table-responsive">
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="sort" data-sort="name">Name</th>
                <th scope="col" className="sort" data-sort="budget">Email</th>
                <th scope="col" className="sort" data-sort="status">Phone</th>
                <th scope="col" className="sort" data-sort="status">Address</th>
                <th scope="col" className="sort" data-sort="status">Roles</th>
                <th scope="col" className="sort" data-sort="status">Action</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody className="list">
              {users}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)