import axios from 'axios'

export const getUsers = (status, payload) => {
  if (status === 200) {
    return {
      type: 'GET_USERS',
      payload
    }
  }
}

export const getUsersAPI = () => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      dispatch(getUsers(res.status, res.data));
    }).then(error => {
      console.log(error);
    });
  }
}