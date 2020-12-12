import axios from 'axios'
export const denyOrder = (payload) => {
    return {
      type: 'DENY_ORDER',
      payload
    }
  }
  
  export const denyOrderAPI = (id) => {
    return (dispatch) => {
      axios({
        method: 'PATCH',
        url: `https://shop-laptop-2020.herokuapp.com/v1/orders/${id}/deny`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': JSON.parse(localStorage.getItem('token'))['token']
        }
      }).then(res => {
        dispatch(denyOrder(res.data))
      }).then(error => {
        console.log(error);
      }).catch(e => {
        return e;
      });
    }
  }