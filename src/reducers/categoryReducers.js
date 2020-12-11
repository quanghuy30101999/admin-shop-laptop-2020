var initialState = [
];

const categories = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES':
            state = action.payload.data
            console.log(state)
            return [...state]
        default : return [...state];
    }
}

export default categories;