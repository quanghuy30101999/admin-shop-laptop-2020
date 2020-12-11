var initialState = [
];

const categories = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GET_CATEGORIES':
            state = action.payload.data
            return [...state]
        case 'CREATE_CATEGORY':
            state.push(action.payload)
            return [...state]
        default: return [...state];
    }
}

export default categories;