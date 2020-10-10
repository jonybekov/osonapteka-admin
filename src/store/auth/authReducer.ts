import { isArrowFunction } from "typescript";
import { SET_IS_AUTHENTICATED } from "./actionTypes";
import { AuthActionTypes } from "./types";

interface AuthState {
    isAuthenticated: boolean;
    user: any;
}

const AUTH_STATE: AuthState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = AUTH_STATE, action: AuthActionTypes) => {
    switch(action.type){
        case SET_IS_AUTHENTICATED:
            return {
                isAuthenticated: action.payload 
            }
        default: return state;
    }
}

export default authReducer;