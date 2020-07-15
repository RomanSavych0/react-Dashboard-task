import {IApp} from "../strore/dashboard/types";

export let addObjintoArray=(items:Array<IApp> , object:IApp)=>{
  items.push(object);
  return items;
};
export let removeObjectFromArray=(items:Array<IApp> , object:IApp)=>{
items=  items.filter(app=>{ return app!==object});
return items
};