import { combineReducers } from 'redux';

import orderReducer from './reduce_orders';

const rootReducer = combineReducers({
    orders: orderReducer
});

export default rootReducer;