var initialState = [
    {
        name: 'DELL',
        description: 'Hang chat luong kem',
        img: 'dell.jpeg'
    },
    {
        name: 'ASUS',
        description: 'Hang chat luong trung binh',
        img: 'asus.jpeg'
    },
    {
        name: 'Macbook',
        description: 'Hang chat luong cao',
        img: 'macbook.jpeg'
    }
];

const categories = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_CATEGORIES':
            return [...state]
        default : return [...state];
    }
}

export default categories;