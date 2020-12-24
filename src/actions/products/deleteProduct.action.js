import axios from 'axios'

export const deleteProductAPI = (key) => {
  return (dispatch) => {
    axios({
      method: 'DELETE',
      url: `https://shop-laptop-2020.herokuapp.com/v1/products/${key}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      dispatch({
        type: 'DELETE_PRODUCTS',
        payload: key
      });
      alert('Delete success')
    }).then(error => {
      console.log(error);
    });
  }
}