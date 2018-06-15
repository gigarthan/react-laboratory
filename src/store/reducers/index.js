import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import orderReducer from './reduce_orders';
import specimenReducer from './reduce_specimen';
import sampleCenterReducer from './reduce_sampleCenters';
import sampleCenterTypesReducer from './reduce_sampleCenterTypes';
import labManagerReducer from './reduce_labManager';

// import labTestManagerReducer from './reduce_labTestManager';
import resultReducer from './reduce_results';
import labTestCategoryReducer from './reduce_labTestCategory';

import getLabTestManagerReducer from './reduce_getLabTestManager';
import getBasicLabTestManagerReducer from './reduce_getBasicLabTestManager';
import getNotificationManagerReducer from './reduce_getNotificationManager';
import authReducer from './reduce_authentication';

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer,
    testResults: resultReducer,
    auth: authReducer,

    ///////////////////// Sample centers ////////////////

    sampleCenters:sampleCenterReducer,

    sampleCenterTypes:sampleCenterTypesReducer,


    ///////////////////// Laboratories ////////////////


    laboratory:labManagerReducer,


    ///////////////////// Laboratories ////////////////


    labTestCategories : labTestCategoryReducer,
    // labTests:labTestManagerReducer,
    //labTests:labTestManagerReducer,


    ///////////////////// GetTests ////////////////


    testField:getLabTestManagerReducer,


    ///////////////////// GetBasicLabTests ////////////////


    basicTestField:getBasicLabTestManagerReducer,


    ///////////////////// GetNotifications ////////////////


    notification:getNotificationManagerReducer

});

export default rootReducer;
