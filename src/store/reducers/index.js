import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import orderReducer from './reduce_orders';
import specimenReducer from './reduce_specimen';
import sampleCenterReducer from './reduce_sampleCenters';
import sampleCenterTypesReducer from './reduce_sampleCenterTypes';
import labManagerReducer from './reduce_labManager';
//import labTestManagerReducer from './reduce_labTestManager';

<<<<<<< HEAD
<<<<<<< HEAD
import labTestManagerReducer from './reduce_labTestManager';
import resultReducer from './reduce_results';
=======
=======
>>>>>>> ab301b904b6df557551f98d042ca6ac6dbd9178c
import labTestCategoryReducer from './reduce_labTestCategory';

import getLabTestManagerReducer from './reduce_getLabTestManager';
import getBasicLabTestManagerReducer from './reduce_getBasicLabTestManager';
import getNotificationManagerReducer from './reduce_getNotificationManager';
<<<<<<< HEAD
>>>>>>> e1bf282c27964bf17a5228a4fd269ded8b5bb3de
=======
>>>>>>> ab301b904b6df557551f98d042ca6ac6dbd9178c

const rootReducer = combineReducers({
    form: formReducer,
    orders: orderReducer,
    specimen: specimenReducer,
    testResults: resultReducer,


    ///////////////////// Sample centers ////////////////

    sampleCenters:sampleCenterReducer,

    sampleCenterTypes:sampleCenterTypesReducer,


    ///////////////////// Laboratories ////////////////


    laboratory:labManagerReducer,


    ///////////////////// Laboratories ////////////////


    labTestCategory : labTestCategoryReducer,


<<<<<<< HEAD
    labTests:labTestManagerReducer,
=======
    //labTests:labTestManagerReducer,
>>>>>>> ab301b904b6df557551f98d042ca6ac6dbd9178c


    ///////////////////// GetTests ////////////////


    testField:getLabTestManagerReducer,


    ///////////////////// GetBasicLabTests ////////////////


    basicTestField:getBasicLabTestManagerReducer,


    ///////////////////// GetNotifications ////////////////


    notification:getNotificationManagerReducer

});

export default rootReducer;
