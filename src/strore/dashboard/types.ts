import {initialState} from "./dashboard-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InfrerActionsTypes} from "../redux-store";
import {dashboardActions} from "./actions";
export interface IApp {
    name: string
    imageUrl:Array<string>
    description:string
    isMapChecked:boolean
    isCategoryChecked:boolean
    color:any
    location:string
    appId?: string

}

export type DashboardActionTypes = InfrerActionsTypes<typeof dashboardActions>;

export type DashboardItitialState = typeof initialState;
export type DashBoardThunkType = ThunkAction<Promise<void>, AppStateType, unknown, DashboardActionTypes>