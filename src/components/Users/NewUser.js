import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createUserAPI } from '../../actions/users/users.action'

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hanh",
            email: "",
            phone: 123456,
            address: "Nguyen Luong Bang",
            password: 123456
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUserAPI(this.state);
    }
    render() {
        let { name, email, phone, address, password } = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" placeholder="Name" required name="name"
                        onChange={this.handleChange}
                        value={name} />
                    <input className="form-control" placeholder="Email" required name="email"
                        onChange={this.handleChange}
                        value={email} />
                    <input className="form-control" placeholder="Phone" required name="phone"
                        onChange={this.handleChange}
                        value={phone} />
                    <input className="form-control" placeholder="Address" required name="address"
                        onChange={this.handleChange}
                        value={address} />
                    <input className="form-control" placeholder="Password" required name="password"
                        onChange={this.handleChange}
                        value={password} />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4" >Create</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    createUserAPI: (data) => dispatch(createUserAPI(data))
})

export default connect(null, mapDispatchToProps)(NewUser)