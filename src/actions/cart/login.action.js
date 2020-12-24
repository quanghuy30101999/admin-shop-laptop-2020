import axios from 'axios'

export const action_get_cart = ( status , payload) => {
    if(status === 200){
        return {
            type: 'GET_CART',
            payload: payload
          }
    }
    else {
        return {
            type: 'LOGIN',
            payload: false
          }
    }
}


export const getCart = (cart_id) => {
    return(dispatch) => {
        axios({
            method: 'GET',
            url: `https://shop-laptop-2020.herokuapp.com/v1/users/${cart_id}/cart`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') != null ? JSON.parse(localStorage.getItem('token'))['token'] : ''
            }
          }).then(res=>{
            dispatch(action_get_cart(res.status,res.data.cart.order_items));
          }).then(error => {
              console.log(error);
        });
    }
}