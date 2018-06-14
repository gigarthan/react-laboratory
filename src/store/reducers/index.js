import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import orderReducer from './reduce_orders';
import specimenReducer from './reduce_specimen';

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer
});

export default rootReducer;