import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import orderReducer from './reduce_orders';
import specimenReducer from './reduce_specimen';
import sampleCenterReducer from './reduce_sampleCenters';
import sampleCenterTypesReducer from './reduce_sampleCenterTypes';
import labManagerReducer from './reduce_labManager';
//import labTestManagerReducer from './reduce_labTestManager';

import labTestCategoryReducer from './reduce_labTestCategory';

import getLabTestManagerReducer from './reduce_getLabTestManager';
import getBasicLabTestManagerReducer from './reduce_getBasicLabTestManager';
import getNotificationManagerReducer from './reduce_getNotificationManager';

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer,


    ///////////////////// Sample centers ////////////////

    sampleCenters:sampleCenterReducer,

    sampleCenterTypes:sampleCenterTypesReducer,


    ///////////////////// Laboratories ////////////////


    laboratory:labManagerReducer,


    ///////////////////// Laboratories ////////////////


    labTestCategory : labTestCategoryReducer,


    labTests:labTestManagerReducer,


    ///////////////////// GetTests ////////////////


    testField:getLabTestManagerReducer,


    ///////////////////// GetBasicLabTests ////////////////


    basicTestField:getBasicLabTestManagerReducer,


    ///////////////////// GetNotifications ////////////////


    notification:getNotificationManagerReducer

});

export default rootReducer;
