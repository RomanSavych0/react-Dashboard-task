import {
  DashboardActionTypes,
  DashboardItitialState,
  DashBoardThunkType,
  IApp,
} from './types'
import { editAppInArray } from '../../utils/object-helper'
import { dashboardActions } from './actions'
import { Dispatch } from 'redux'
import { addAppAPI, getDataAPI, removeAppAPI } from '../../api/API'

export const initialState = {
  apps: [] as Array<IApp>,
  keys: [] as Array<string>,
  isEditorOpened: false as boolean,
  currentEditApp: {
    appId: '',
    name: ' ',
    imageUrl: [' '],
    location: '',
    description: '',
    color: {},
    isCategoryChecked: false,
    isMapChecked: false,
  } as IApp,
  isEditAppMode: false as boolean,
}

const dashboardReducer = (
  state = initialState,
  action: DashboardActionTypes,
): DashboardItitialState => {
  switch (action.type) {
    case 'SET-APPS':
      return {
        ...state,
        apps: action.apps,
      }
    case 'ADD-APP':
      return {
        ...state,
        apps: [...state.apps, action.app],
      }
    case 'OPEN-EDITOR':
      return {
        ...state,
        isEditorOpened: action.open,
      }
    case 'CLOSE-EDITOR':
      return {
        ...state,
        isEditorOpened: action.open,
      }
    case 'EDIT-APP':
      return {
        ...state,
        currentEditApp: action.app,
      }

    case 'SET-KEYS':
      return {
        ...state,
        keys: action.keys,
      }
    case 'SET-IS-EDIT-APP-MODE':
      return {
        ...state,
        isEditAppMode: action.editMode,
      }

    case 'SET-NEW-APP-VALUE':
      return {
        ...state,
        apps: editAppInArray(state.apps, action.app),
      }

    default:
      return state
  }
}

export const setIsEditAppMode = (isEdit: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch(dashboardActions.setisEditAppMode(isEdit))
  }
}

export const addAppThunk = (
  userName: string | null,
  appName: string,
  ImageUrl: Array<string>,
  description: string,
  isMapChecked: boolean,
  isCategoryChecked: boolean,
  color: any,
  location: string,
  userId: string | null,
): DashBoardThunkType => {
  const app = {
    appId: '',
    name: appName,
    imageUrl: ImageUrl,
    description: description,
    isMapChecked: isMapChecked,
    isCategoryChecked: isCategoryChecked,
    color: color,
    location: location,
  }
  if (userName === null) userName = ''
  return async (dispatch) => {
    let key = addAppAPI(userId, app).key
    if (key === null) key = ' '
    app.appId = key
    dispatch(dashboardActions.addAppAC(app))
  }
}

// interface responseApps{
// apps: Array<{app :IApp}>;
// }

export const setAppsThunk = (
  userID: string | null = null,
  apps: Array<IApp> = [],
): DashBoardThunkType => {
  return async (dispatch) => {
    getDataAPI(userID)
      .then(function (snapshot) {
        if (userID !== null) {
          for (const item of Object.values(snapshot.val())) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            apps.push(item)
          }
          let i = 0
          for (const key of Object.keys(snapshot.val())) {
            apps[i].appId = key
            i = i + 1
          }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(dashboardActions.setAppsAC(apps))
      })
      .catch(() => dispatch(dashboardActions.setAppsAC([])))
  }
}

export const openEditor = () => {
  return (dispatch: Dispatch) => {
    dispatch(dashboardActions.openEditorAC())
  }
}
export const closeEditor = () => {
  return (dispatch: Dispatch) => {
    dispatch(dashboardActions.closeEditorAC())
  }
}
export const setEditApp = (app: IApp) => {
  return (dispatch: Dispatch) => {
    dispatch(dashboardActions.setCurrentEditApp(app))
  }
}

export const removeAppThunk = (
  userId: string | null,
  app: IApp,
): DashBoardThunkType => {
  return async (dispatch) => {
    removeAppAPI(userId, app)
      .then((response) => {
        dispatch(dashboardActions.editAppAC(app))
      })
      .catch((error) => console.log(error))
  }
}

export default dashboardReducer
