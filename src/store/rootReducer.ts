import { combineReducers } from "redux";

// import reducers
import admissionReducer from "./admission/admissionReducer";
import authReducer from "./auth/authReducer";
import inventoryReducer from "./inventory/inventoryReducer";

// root reducer
const rootReducer = combineReducers({ auth: authReducer, inventory: inventoryReducer, admission: admissionReducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
