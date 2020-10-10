import { RootState } from "../rootReducer"

export const selectAdmissionsList = (state: RootState) => state.admission.admission
