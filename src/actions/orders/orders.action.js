import axios from 'axios'

export const getOrders = (status, payload) => {
  if (status === 200) {
    return {
      type: 'GET_ORDERS',
      payload
    }
  }
}

export const getOrdersAPI = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/orders',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      dispatch(getOrders(res.status, res.data));
    }).then(error => {
      console.log(error);
    });
  }
}

export const showOrders = () => {
  return {
    type: 'SHOW_ORDERS'
  }
}


export const createOrder = (status, payload) => {
  if (status === 200) {
    return {
      type: 'CREATE_ORDER',
      payload
    }
  }
}


export const createOrderAPI = (result, sum, user_id, user) => {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: `https://shop-laptop-2020.herokuapp.com/v1/orders`,
      data: {
        order_item_ids: result,
        subtotal: sum,
        user_id: user_id,
        user_name: user.user_name,
        userphone_phone: user.phone,
        address: user.address
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      console.log(res)
      dispatch(createOrder(res.status, res.data))
    }).then(error => {
      console.log(error);
    }).catch(e => {
      return e;
    });
  }
}



export const approveOrder = (payload) => {
  return {
    type: 'APPROVED_ORDER',
    payload
  }
}

export const approveOrderAPI = (id) => {
  return (dispatch) => {
    axios({
      method: 'PATCH',
      url: `https://shop-laptop-2020.herokuapp.com/v1/orders/${id}/approve`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      dispatch(approveOrder(res.data))
    }).then(error => {
      console.log(error);
    }).catch(e => {
      return e;
    });
  }
}