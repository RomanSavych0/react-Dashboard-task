import {authActionsTypes, authInitialStateType, AuthThunkType} from "./types";
import {authMeAPI, registerAPI, signOutAPI} from "../../api/API";
import {authActions} from "./actions";
import {toast} from "react-toastify";

export const initialState = {
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

export const login = (email: string, pasword: string): AuthThunkType => {
    return async (dispatch) => {
        authMeAPI(email, pasword).then(
            response => {
                dispatch(authActions.authAC(email, true))
            }
        ).catch(error => toast.error(error.toString()));


    }
};

export const register = (email: string, pasword: string): AuthThunkType => {
    return async (dispatch) => {
        registerAPI(email, pasword).then(
            response   => {
                toast.success('Account has been created success');
                // dispatch(authActions.authAC(email, false))
            }
        ).catch(error => toast.error(error.toString()));
    }
};

export const signOut = (): AuthThunkType => {
    return async (dispatch) => {
        signOutAPI().then(
            response => {
                dispatch(authActions.signOutAC())
            }
        ).catch(error => toast.error(error.toString()));
    }
};


export default authReducer;