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
    },
    setCurrentEditApp:(app:IApp)=>{
      return {type:'EDIT-APP' , app} as const
    },
    removeAppAC:(app:IApp)=>{
      return{type:'REMOVE-APP' , app}as const
    },
    setKeysAC:(keys:Array<string>)=>{
      return{type:'SET-KEYS' , keys}as const
    }

};