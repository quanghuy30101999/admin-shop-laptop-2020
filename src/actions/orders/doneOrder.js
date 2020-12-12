import axios from 'axios'
export const doneOrder = (payload) => {
    return {
      type: 'DONE_ORDER',
      payload
    }
  }
  
  export const doneOrderAPI = (id) => {
    return (dispatch) => {
      axios({
        method: 'PATCH',
        url: `https://shop-laptop-2020.herokuapp.com/v1/orders/${id}/done`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': JSON.parse(localStorage.getItem('token'))['token']
        }
      }).then(res => {
        dispatch(doneOrder(res.data))
      }).then(error => {
        console.log(error);
      }).catch(e => {
        return e;
      });
    }
  }