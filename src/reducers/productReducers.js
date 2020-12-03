var initialState = [
    {
        name: "Dell 2020",
        price: 25000000,
        quantity: 20,
        ram: 16,
        memory: 256,
        description: 'Dell 2020 nha',
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_PRODUCTS':
            return [...state]
        default : return [...state];
    }
}

export default products;