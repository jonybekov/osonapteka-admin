import { ADD_ADMISSION } from "./actionTypes";
import { AdmissionActionTypes, AdmissionInitialState } from "./types";

const initialState: AdmissionInitialState = {
    admission: [
        {
          key: "1",
          status: "success",
          supplier: "Феруз-тарона",
          arrivalDate: "25.09.2020",
          waybillNum: 893489,
          amount: 220,
          price: 12650000,
        },
        {
            key: "2",
            status: "success",
            supplier: "Феруз-тарона",
            arrivalDate: "25.09.2020",
            waybillNum: 893489,
            amount: 220,
            price: 12650000,
        }
      ], 
}

const admissionReducer = (state = initialState, action: AdmissionActionTypes) => {
    switch(action.type) {
        case ADD_ADMISSION:
            return {
                admission: [...state.admission, action.payload]
            }
        default:
            return state;
    }
}

export default admissionReducer;