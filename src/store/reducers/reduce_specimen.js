import { GET_ORDER } from '../types';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ORDER:
            const specimen = action.payload[0];
            const testDetails = {
                _id: specimen._id,
                category: specimen.category,
                testName: specimen.testName
            };
            const { fullName, patientHIN, dob, gender } = specimen;
            const patient = { fullName, patientHIN, dob, gender };
            const specimenData = specimen.specimen;
            return { testDetails, patient, specimenData};

        default:
            return state;
    }
};