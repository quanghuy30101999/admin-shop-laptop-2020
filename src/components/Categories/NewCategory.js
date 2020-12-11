import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createCategoryAPI } from '../../actions/categories/category.action'

class NewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCategoryAPI(this.state);
    }
    render() {
        let { name, description } = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control" placeholder="Name" required name="name"
                        onChange={this.handleChange}
                        value={name} />
                    <input className="form-control" placeholder="Description" required name="description"
                        onChange={this.handleChange}
                        value={description} />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4" >Create</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    createCategoryAPI: (data) => dispatch(createCategoryAPI(data))
})

export default connect(null, mapDispatchToProps)(NewCategory)