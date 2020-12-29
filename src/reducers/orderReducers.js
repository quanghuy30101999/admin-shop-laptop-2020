var initialState = [
];

var findIndex = (product, id) => {
    var result = -1;
    product.forEach((element, index) => {
        if (element.id === id) {
            result = index
        }
    });
    return result;
}

const orders = (state = initialState, action) => {
    console.log(state);
    var index = -1;
    switch (action.type) {
        case 'GET_ORDERS':
            state = action.payload.data
            return [...state]
        case 'SHOW_ORDERS':
            return [...state]
        case 'CREATE_ORDER':
            state.push(action.payload)
            return [...state]
        case 'DONE_ORDER':
            index = findIndex(state, action.payload.id)
            state[index] = action.payload
            return [...state]
        case 'APPROVED_ORDER':
            index = findIndex(state, action.payload.id)
            state[index] = action.payload
            return [...state]
        case 'HISTORY_ORDER_BY_USER':
            state = action.payload.data
            return [...state]
        case 'DENY_ORDER':
            const newState = { ...state }
            newState = action.payload
            return { ...newState }
        default: return [...state];
    }
}

export default orders;