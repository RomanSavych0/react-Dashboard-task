import {DashboardActionTypes, DashboardItitialState, IApp, ThunkType} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {addObjintoArray} from "../../utils/object-helper";
import {dashboardActions} from "./actions";
import {Dispatch} from "redux";
import React from "react";

export let initialState = {
    apps: [] as Array<IApp>
};
const dashboardReducer = (state = initialState, action: DashboardActionTypes): DashboardItitialState => {
    switch (action.type) {
        case "SET-APPS":
            return {
                ...state, apps: action.apps
            };
        case 'ADD-APP':
            return {
                ...state, apps: addObjintoArray(state.apps, action.app)
            };

        default:
            return state;
    }
    ;
};


export let addApp = (appName: string, images: Array<File>, ImageUrl: Array<String>, description: string,
                     isMapChecked: boolean, isCategoryChecked: boolean, color: any, location: string) => {
    let app = {
        name: appName, images: images, imageUrl: ImageUrl, description: description,
        isMapChecked: isMapChecked, isCategoryChecked: isCategoryChecked, color: color, location: location
    };
    return (dispatch: Dispatch) => {
        dispatch(dashboardActions.addAppAC(app))
    }
};

export default dashboardReducer