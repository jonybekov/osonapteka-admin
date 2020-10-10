import { AdmissionActionTypes } from "./types";
import { Admission } from "../../types";
import { ADD_ADMISSION } from "./actionTypes";

export function addTodo(admission: Admission): AdmissionActionTypes {
    return ({
        type: ADD_ADMISSION,
        payload: admission
      });
}