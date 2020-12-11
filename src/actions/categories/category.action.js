import axios from 'axios'

export const getCategories = (status, payload) => {
  if (status === 200) {
    return {
      type: 'GET_CATEGORIES',
      payload
    }
  }
}

export const getCategoriesAPI = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/categories',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      dispatch(getCategories(res.status, res.data));
    }).then(error => {
      console.log(error);
    });
  }
}
