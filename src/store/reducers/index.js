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

import viewRequestReducer from './reduce_newTestOrder';
import newOrderReducer from './reduce_newOrder';
import labDetailsReducer from './reduce_newOrder';
import addTestReducer from './reduce_tests'
import ageLaboratoryReducer from './reduce_tests'
import addTestFieldReducer from './reduce_testsFields'

//import viewRequestReducer from './reduce_newTestOrder';
//import newOrderReducer from './reduce_newOrder';
//import labDetailsReducer from './reduce_newOrder';

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer,
    testResults: resultReducer,
    auth: authReducer,

//<<<<<<< HEAD



/////////////////    TEST REQUESTS VIEW     ////////////////////

    viewOrders: viewRequestReducer,


/////////////////    TEST REQUESTS VIEW     ////////////////////

    //viewOrders: viewRequestReducer,


/////////////////    ADD NEW ORDER     ////////////////////

    //newOrder: newOrderReducer,

    //labDetails :labDetailsReducer,


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



    notification:getNotificationManagerReducer,


    notification:getNotificationManagerReducer,


    test:addTestReducer,
    lab:ageLaboratoryReducer,
    testField:addTestFieldReducer


});

export default rootReducer;
