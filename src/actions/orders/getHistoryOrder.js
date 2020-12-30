import axios from 'axios'


export const getHistoryOrder = (id) => {
    console.log(id);
    return(dispatch) => {
        axios({
            method: 'GET',
            url: `https://shop-laptop-2020.herokuapp.com/v1/users/${id}/history_orders`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token'))['token'] : ''
            }
          }).then(res=>{
            dispatch({
                type: 'GET_HISTORY_ORDER',
                payload : res.data
            });
          }).then(error => {
              console.log(error);
        });
    }
}