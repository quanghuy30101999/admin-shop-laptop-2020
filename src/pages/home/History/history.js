import React, { Fragment, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { historyOrdersByUserAPI } from '../../../actions/orders/orders.action'
import '../css/history.css'
import Header from '../Header'

function OrderHistory(props) {
    const token = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token'))['token'] : ''
    const user_id = localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token'))['user'].id : ''
    const history = useSelector(state => state.orders)
    console.log(history);
    useEffect(() => {
        if (token) {
            const getHistory = async () => {
                // historyOrdersByUserAPI();
                props.historyOrdersByUserAPI(user_id);
            }
            getHistory()
        }
    }, [])

    return (
        <Fragment>
            <Header />
            <div className="history-page">
                <h2>History</h2>

                <h4>You have {history.length} ordered</h4>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date of Purchased</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(items => (
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{new Date(items.created_at).toLocaleDateString()}</td>
                                    <td><Link to={`/history/${items.id}`}>View</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}


const mapDispatchToProps = dispatch => ({
    historyOrdersByUserAPI: (user_id) => dispatch(historyOrdersByUserAPI(user_id))
})
export default connect(null, mapDispatchToProps)(OrderHistory)