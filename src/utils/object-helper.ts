import {IApp} from "../strore/dashboard/types";

export const addObjintoArray=(items:Array<IApp> , object:IApp)=>{
  items.push(object);
  return items;
};
export const removeObjectFromArray=(items:Array<IApp> , object:IApp)=>{
items=  items.filter(app=>{ return app!==object});
return items
};
export const editAppInArray=(items:Array<IApp> , object:IApp)=>{
console.log(items);

  items = items.map((i)=>{
  if(i.appId === object.appId){
    console.log(i);
    i = object
  }
  return i;
})
console.log(items);
return items;
};