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

export const createProductAPI = (data) => {
  return (dispatch) => {
    axios({
      method: 'POST',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/products',
      data: {
        category_id: data.category_id,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        ram: data.ram,
        memory: data.memory,
        description: data.description
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('token'))['token']
      }
    }).then(res => {
      dispatch(
        {
          type: 'CREATE_PRODUCTS',
          payload: res.data
        },
        alert('Create success')
      );
    }).then(error => {
      // console.log(error);
      
    }).catch(res => {
      
    });
  }
}