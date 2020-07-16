import {DashboardActionTypes, DashboardItitialState, DashBoardThunkType, IApp} from "./types";
import {addObjintoArray, removeObjectFromArray} from "../../utils/object-helper";
import {dashboardActions} from "./actions";
import {Dispatch} from "redux";
import {addAppAPI,  getDataAPI, removeAppAPI} from "../../api/API";

export let initialState = {
    apps: [] as Array<IApp>,
    keys:[]as Array<string>,
    isEditorOpened: false as boolean,
    currentEditApp: {
        name: ' ', imageUrl: [' '], location: '', description: '',
        color: {}, isCategoryChecked: false, isMapChecked: false,
    } as IApp,
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
        case 'EDIT-APP':
            return {
                ...state, currentEditApp: action.app
            };
        case 'REMOVE-APP':
            return {
                ...state, apps: removeObjectFromArray(state.apps, action.app)

            };
        case 'SET-KEYS':
            return {
                ...state, keys: action.keys
            }

        default:
            return state;
    }
};



export let addAppThunk = (userName: string | null, appName: string, ImageUrl: Array<string>,
                          description: string, isMapChecked: boolean,
                          isCategoryChecked: boolean, color: any, location: string): DashBoardThunkType => {
    let app = {
        name: appName, imageUrl: ImageUrl, description: description,
        isMapChecked: isMapChecked, isCategoryChecked: isCategoryChecked, color: color, location: location
    };
    if (userName === null)
        userName = '';
    return async (dispatch) => {
        addAppAPI(userName, app).then(
            response => {
                dispatch(dashboardActions.addAppAC(app))
            }
        ).catch(error => alert(error));
    }
};
export let setAppsThunk = (URL: string | null): DashBoardThunkType => {

    return async (dispatch) => {
        getDataAPI(URL).then(response => {
            let data = Object.values(response.data);
            let appsArray = [];
            for (let item of data) {
                appsArray.push(item)
            }
            // @ts-ignore
            dispatch(dashboardActions.setAppsAC(appsArray))
        }).catch(error => dispatch(dashboardActions.setAppsAC([])));
    };
};

export let openEditor = () => {
    return (dispatch: Dispatch) => {
        dispatch(dashboardActions.openEditorAC())
    }

};
export let closeEditor = () => {
    return (dispatch: Dispatch) => {
        dispatch(dashboardActions.closeEditorAC())
    }
};
export let setEditApp = (app: IApp) => {
    return (dispatch: Dispatch) => {
        dispatch(dashboardActions.setCurrentEditApp(app))
    }
};

export let removeAppThunk = (URL: string | null, app: IApp):DashBoardThunkType => {
    return async (dispatch) => {
        removeAppAPI(URL, app).then(response => {
            dispatch(dashboardActions.removeAppAC(app));
        }).catch(error => console.log(error));
    };

};

export default dashboardReducer