import axios from 'axios'

export const getProduct = (status, payload) => {
  if (status === 200) {
    return {
      type: 'SHOW_PRODUCTS',
      payload
    }
  }
}


export const getProductAPI = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/products',
    }).then(res => {
      dispatch(getProduct(res.status, res.data));
    }).then(error => {
      console.log(error);
    });
  }
}