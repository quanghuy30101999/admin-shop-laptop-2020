import axios from 'axios'

export const action_login = (payload) => {
    if(payload === 200){
        return {
            type: 'LOGIN',
            payload: true
          }
    }
    else {
        return {
            type: 'LOGIN',
            payload: false
          }
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: false
    }
}


export const login = (isLogin) => {
    return(dispatch) => {
        axios({
            method: 'POST',
            url: 'https://shop-laptop-2020.herokuapp.com/v1/login',
            data: {
                email: isLogin.email,
                password: isLogin.password
            }
          }).then(res=>{
                localStorage.setItem('token', JSON.stringify(res.data))
                dispatch(action_login(res.status));
          }).catch(error => {
            alert('Đăng nhập thất bại');
          });
    }
}