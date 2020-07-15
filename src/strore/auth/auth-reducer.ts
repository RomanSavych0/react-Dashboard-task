import dashboardReducer from "../dashboard/dashboard-reducer";
import {authActionsTypes, authInitialStateType, AuthThunkType} from "./types";
import {authMeAPI, signOutAPI} from "../../api/API";
import {authActions} from "./actions";

export let initialState = {
    isAuth: false as boolean,
    login: null as string | null,
};
const authReducer = (state = initialState, action: authActionsTypes): authInitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, login: action.login, isAuth: action.isAuth};
        case "SIGN_OUT":
            return {...state, login: action.login, isAuth: action.isAuth};
        default:
            return state
    }
};

export let login = (email: string, pasword: string): AuthThunkType => {
    return async (dispatch) => {
        authMeAPI(email, pasword).then(
            response => {
                dispatch(authActions.authAC(email, true))
            }
        ).catch(error => alert(error));


    }


};
export let signOut = (): AuthThunkType => {
    return async (dispatch) => {
        signOutAPI().then(
            response => {
                dispatch(authActions.signOutAC())
            }
        ).catch(error => alert(error));


    }


};


export default authReducer;