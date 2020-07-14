import {initialState} from "./dashboard-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InfrerActionsTypes} from "../redux-store";
import {dashboardActions} from "./actions";
export interface IApp {
    addId?: number
    name: string
    images:Array<File>
    imageUrl:Array<String>
    description:string
    isMapChecked:boolean
    isCategoryChecked:boolean
    color:any
    location:string
}

export type DashboardActionTypes = InfrerActionsTypes<typeof dashboardActions>;

export type DashboardItitialState = typeof initialState;
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, DashboardActionTypes>