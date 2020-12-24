import axios from 'axios'


export const findProductFromCate = (id) => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: 'https://shop-laptop-2020.herokuapp.com/v1/categories/' +`${id}`,
    }).then(res => {
        console.log(res.data);
      dispatch({
        type: 'FIND_PRODUCTS_CATE',
        payload : res.data
      });
    }).then(error => {
      console.log(error);
    });
  }
}