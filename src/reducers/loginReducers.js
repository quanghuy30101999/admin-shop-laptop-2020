var initialState = false;

const login = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'LOGIN':
            state = action.payload
            return state
        default : return state;
    }
}

export default login;