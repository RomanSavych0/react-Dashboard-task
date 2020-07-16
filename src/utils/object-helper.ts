import {IApp} from "../strore/dashboard/types";

export const addObjintoArray=(items:Array<IApp> , object:IApp)=>{
  items.push(object);
  return items;
};
export const removeObjectFromArray=(items:Array<IApp> , object:IApp)=>{
items=  items.filter(app=>{ return app!==object});
return items
};