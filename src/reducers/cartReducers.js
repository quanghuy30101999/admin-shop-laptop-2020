var initialState = [];

const cart = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'GET_CART':
            state = action.payload
            return state
        default : return state;
    }
}

export default cart;