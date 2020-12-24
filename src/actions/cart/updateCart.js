import axios from 'axios'

export const updateCart = (status, payload, id) => {
    if(status===200){
        return {
            type: 'UPDATE_CART',
            payload: payload.order_item,
            id: id
        }
    }

    if(status===429){
        alert('Too many requests')
    }
}

export const updateCartAPI = (id, price) => {
    return(dispatch) => {
        axios({
            method: 'PUT',
            url: `https://shop-laptop-2020.herokuapp.com/v1/order_items/${id}/quantity`,
            data: {
                quantity: price,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))['token']
            }
          }).then(res=>{
              console.log(res.data.order_item.id)
              dispatch(updateCart(res.status, res.data, id))
          }).then(error => {
              console.log(error);
        }).catch(e => {
            alert('...')
            return e;
        });
    }
}