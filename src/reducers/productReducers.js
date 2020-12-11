var initialState = [];

var findIndex = (product, id) => {
    var result = -1;
    product.forEach((element, index) => {
        if (element.id === id) {
            result = index
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case 'FIND_PRODUCTS':
            state = action.payload.data
            return [...state]
        case 'SHOW_PRODUCTS':
            state = action.payload.data
            return [...state]
        case 'CREATE_PRODUCTS':
            state.push(action.payload)
            return [...state]
        case 'UPDATE_PRODUCT':
            index = findIndex(state, action.payload.id)
            state[index] = action.payload
            return [...state]
        default: return [...state];
    }
}

export default products;