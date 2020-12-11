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

export const createUserAPI = (data) => {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password
      }
    }).then(res => {
      dispatch({
        type: 'CREATE_USER',
        payload: res.data
      },alert('Create Success'));
    }).then(error => {
      console.log(error);
    });
  }
}