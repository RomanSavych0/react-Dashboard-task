import {IApp} from "../strore/dashboard/types";

export let addObjintoArray=(items:Array<IApp> , object:IApp)=>{
  items.push(object);
  return items;


};