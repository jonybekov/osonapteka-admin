import { Admission } from "../../types";
import { ADD_ADMISSION } from "./actionTypes";

export interface AdmissionInitialState{
    admission: Admission[];
}

interface AddAdmissionAction{
    type: typeof ADD_ADMISSION;
    payload: Admission
}

export type AdmissionActionTypes = AddAdmissionAction;

