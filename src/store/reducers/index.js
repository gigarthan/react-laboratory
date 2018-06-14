import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import orderReducer from './reduce_orders';
import specimenReducer from './reduce_specimen';
import sampleCenterReducer from './reduce_sampleCenters';
//import sampleCenterTypesReducer from './reduce_sampleCenterTypes';
import labManagerReducer from './reduce_labManager';

import labTestManagerReducer from './reduce_labTestManager';

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer


    ///////////////////// Sample centers ////////////////

    sampleCenters:sampleCenterReducer,

    //sampleCenterTypes:sampleCenterTypesReducer


    ///////////////////// Laboratories ////////////////


    labs:labManagerReducer,


    ///////////////////// Laboratories ////////////////


    labTests:labTestManagerReducer

});

export default rootReducer;
