import axios from 'axios'

export const getProduct = (status, payload) => {
  if (status === 200) {
    return {
      type: 'FIND_PRODUCTS',
      payload
    }
  }
}


export const findProductAPI = (key) => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/products',
        params: {
            search: key
        }
    }).then(res => {
        console.log(res.data);
      dispatch({
        type: 'FIND_PRODUCTS',
        payload : res.data
      });
    }).then(error => {
      console.log(error);
    });
  }
}