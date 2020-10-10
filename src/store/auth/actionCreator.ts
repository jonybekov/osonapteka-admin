import { SET_IS_AUTHENTICATED } from "./actionTypes";
import { AuthActionTypes } from "./types";



export function setIsAuthenticated(status: boolean): AuthActionTypes {
    return ({type: SET_IS_AUTHENTICATED, payload: status})
}