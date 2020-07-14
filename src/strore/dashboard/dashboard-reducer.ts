import {DashboardActionTypes, DashboardItitialState, IApp, ThunkType} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {addObjintoArray} from "../../utils/object-helper";
import {dashboardActions} from "./actions";
import {Dispatch} from "redux";
import React from "react";

export let initialState = {
    apps: [] as Array<IApp>,
    isEditorOpened: false as boolean,
    currentEditApp: {name:' ', imageUrl:[' '],location:'',description:'',
        color:{} , isCategoryChecked:false , isMapChecked:false,
    } as IApp
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
        case 'OPEN-EDITOR':
            return {
                ...state, isEditorOpened: action.open
            };
        case 'CLOSE-EDITOR':
            return {
                ...state, isEditorOpened: action.open
            };

        default:
            return state;
    }
    ;
};


export let addApp = (appName: string,  ImageUrl: Array<string>, description: string,
                     isMapChecked: boolean, isCategoryChecked: boolean, color: any, location: string) => {
    let app = {
        name: appName,  imageUrl: ImageUrl, description: description,
        isMapChecked: isMapChecked, isCategoryChecked: isCategoryChecked, color: color, location: location
    };
    return (dispatch: Dispatch) => {
        dispatch(dashboardActions.addAppAC(app))
    }
};

export let openEditor=()=>{
    return(dispatch: Dispatch)=>{
        dispatch(dashboardActions.openEditorAC())
    }

};
export let closeEditor=()=>{
    return(dispatch: Dispatch)=>{
        dispatch(dashboardActions.closeEditorAC())
    }


};

export default dashboardReducer