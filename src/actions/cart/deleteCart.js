import axios from 'axios'

export const deleteCartAPI = (idItem) => {
    return(dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://shop-laptop-2020.herokuapp.com/v1/order_items/${idItem}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))['token']
            }
          }).then(res=>{
              dispatch({
                type: 'DELETE_TO_CART',
                idItem
              })
              console.log(res.data);
          }).then(error => {
              console.log(error);
        });
    }
}