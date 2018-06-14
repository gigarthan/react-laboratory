import { combineReducers } from 'redux';

import orderReducer from './reduce_orders';

import viewRequestReducer from './reduce_newTestOrder';

const rootReducer = combineReducers({
    orders: orderReducer
});




/////////////----------------------------------- ERANDI ------------------------////////////////////////////////////////





const rootViewOrderReducer = combineReducers({
    orders: viewRequestReducer
});




export default (rootReducer) (rootViewOrderReducer);
//export default rootReducer;
//export default rootViewOrderReducer;