var initialState = [
    {
        name: 'Tran Quang Huy',
        email: 'huytran.301099@gmail.com',
        phone: "0123456789",
        address: "8382 Toy Ferry",
        roles:[
            "USER",
            "ADMIN"
        ]
    }
];

const categories = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_USERS':
            return [...state]
        default : return [...state];
    }
}

export default categories;