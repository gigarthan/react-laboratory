import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import orderReducer from './reduce_orders';
import specimenReducer from './reduce_specimen';

import viewRequestReducer from './reduce_newTestOrder';
import newOrderReducer from './reduce_newOrder';
import labDetailsReducer from './reduce_newOrder';

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer,





/////////////////    TEST REQUESTS VIEW     ////////////////////

    viewOrders: viewRequestReducer,


/////////////////    ADD NEW ORDER     ////////////////////

    newOrder: newOrderReducer,

    labDetails :labDetailsReducer



});

export default rootReducer;
