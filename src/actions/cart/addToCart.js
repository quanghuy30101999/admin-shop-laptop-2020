import axios from 'axios'

export const addToCart = ( status , payload) => {
    if(status === 201 || status === 200){
        return {
            type: 'ADD_TO_CART',
            payload: payload
          }
    }
}


export const addToCartAPI = (data) => {
    return(dispatch) => {
        axios({
            method: 'POST',
            url: `https://shop-laptop-2020.herokuapp.com/v1/order_items`,
            data: {
                product_id: data.id,
                quantity: 1,
                unit_price: data.price,
                product_name: data.name,
                cart_id: JSON.parse(localStorage.getItem('token')).user.cart.id
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))['token']
            }
          }).then(res=>{
              dispatch(addToCart(res.status, res.data))
              alert('Thêm vào giỏ hàng thành công')
          }).then(error => {
              console.log(error);
        });
    }
}
