import {IApp} from "./types";

export const dashboardActions = {
    addAppAC: (app: IApp) => {
        return {type: 'ADD-APP', app} as const
    },

    setAppsAC: (apps: Array<IApp>) => {
        return {type: 'SET-APPS', apps} as const
    },

    openEditorAC: () => {
        return {type: 'OPEN-EDITOR', open: true} as const
    },
    closeEditorAC: () => {
        return {type: 'CLOSE-EDITOR', open: false} as const
    }


};