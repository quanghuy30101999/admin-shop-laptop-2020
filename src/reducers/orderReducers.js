var initialState = [
];

const orders = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ORDERS':
            state = action.payload.data
            return [...state]
        case 'SHOW_ORDERS':
            return [...state]
        case 'CREATE_ORDER':
            state.push(action.payload)
            return [...state]
        default: return [...state];
    }
}

export default orders;