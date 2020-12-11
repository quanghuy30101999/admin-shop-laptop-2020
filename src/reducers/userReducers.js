var initialState = [
];

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_USERS':
            return [...state]
        case 'GET_USERS':
            state = action.payload.data
            return [...state]
        default: return [...state];
    }
}

export default categories;