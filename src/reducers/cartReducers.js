var initialState = [];

var findIndex = (product, id) => {
    var result = -1;
    product.forEach((element, index) => {
        if(element.id === id){
            result = index
        }
    });
    return result;
}

const cart = (state = initialState, action) => {
    var index = -1;
    switch(action.type){
        case 'DELETE_TO_CART':
            index = findIndex(state, action.idItem)
            state.splice(index, 1);
            return [...state]
        case 'GET_CART':
            state = action.payload
            console.log(state)
            return [...state]
        case 'ADD_TO_CART':
            state.push(action.payload)
            return [...state]
        case 'UPDATE_CART':
            index = findIndex(state, action.id)
            state[index].status = action.payload.status
            return [...state]
        default : return [...state];
    }
}

export default cart;