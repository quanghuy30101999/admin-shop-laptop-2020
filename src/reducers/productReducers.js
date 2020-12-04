var initialState = [];

const products = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_PRODUCTS':
            state = action.payload.data
            return [...state]
        default : return [...state];
    }
}

export default products;