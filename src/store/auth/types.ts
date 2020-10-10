import { SET_IS_AUTHENTICATED } from "./actionTypes";

interface SetIsAuthenticated {
    type: typeof SET_IS_AUTHENTICATED;
    payload: boolean;
}

export type AuthActionTypes = SetIsAuthenticated;