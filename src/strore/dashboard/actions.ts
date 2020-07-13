import {IApp} from "./types";

export const dashboardActions={
    addAppAC:(app:IApp)=>{
        return{type:'ADD-APP', app }as const
    },

    setAppsAC:(apps:Array<IApp>)=>{
return{type:'SET-APPS', apps }as const
},





};