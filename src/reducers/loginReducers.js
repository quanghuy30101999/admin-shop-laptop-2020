var initialState = localStorage.getItem('token') != null ? true : false;

const login = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            state = action.payload
            return state
        case 'LOGOUT':
            state = action.payload
            return state
        default : return state;
    }
}

export default login;