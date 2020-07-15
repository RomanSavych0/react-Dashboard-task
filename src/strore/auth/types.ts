import {initialState} from './auth-reducer'
import {AppStateType, InfrerActionsTypes} from "../redux-store";
import {authActions} from "./actions";
import {ThunkAction} from "redux-thunk";

export type authInitialStateType = typeof initialState;

export type authActionsTypes = InfrerActionsTypes<typeof authActions>;
export type AuthThunkType = ThunkAction<Promise<void>, AppStateType, unknown, authActionsTypes>