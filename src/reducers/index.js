import { combineReducers } from 'redux';
import categories from './categoryReducers';
import orders from './orderReducers';
import users from './userReducers';
import products from './productReducers';
import login from './loginReducers';
import cart from './cartReducers';



const appReducers = combineReducers({
    categories,
    orders,
    users,
    products,
    login,
    cart
});

export default appReducers;