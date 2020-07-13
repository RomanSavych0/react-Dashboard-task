import {DashboardActionTypes, DashboardItitialState, IApp, ThunkType} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {addObjintoArray} from "../../utils/object-helper";
import {dashboardActions} from "./actions";
import {Dispatch} from "redux";

export let initialState = {

    apps: [] as Array<IApp>

};
const dashboardReducer = (state = initialState, action: DashboardActionTypes):DashboardItitialState => {
    switch (action.type) {
        case "SET-APPS":
            return {
                ...state, apps: action.apps
            };
        case 'ADD-APP':
            return {
                ...state, apps:addObjintoArray(state.apps, action.app)
            };

        default:
            return state;
    }
    ;
};
// addId:number
// name:string
// image:HTMLImageElement|File|String
// description:string
// location:string

export let addApp = ( name:string, image:HTMLImageElement|File|String ,
                     description:string, location:string) => {
    let app ={name, image , description, location};
    return (dispatch: Dispatch) => {
        dispatch(dashboardActions.addAppAC(app))
    }

};

export default dashboardReducer