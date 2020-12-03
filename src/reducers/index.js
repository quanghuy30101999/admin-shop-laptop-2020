import { combineReducers } from 'redux';
import categories from './categoryReducers';
import orders from './orderReducers';
import users from './userReducers';
import products from './productReducers';
import login from './loginReducers';


const appReducers = combineReducers({
    categories,
    orders,
    users,
    products,
    login
});

export default appReducers;