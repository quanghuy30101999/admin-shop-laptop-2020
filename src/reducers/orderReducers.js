var initialState = [
    {
        status: "shipping",
        subtotal: 100,
        user_name: "huy",
        phone: "0123456789",
        address: "197 nguyen luong bang",
        created_at: "2020-11-28"
    }
];

const orders = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_ORDERS':
            return [...state]
        default : return [...state];
    }
}

export default orders;