import { IApp } from '../strore/dashboard/types'

export const editAppInArray = (items: Array<IApp>, object: IApp) => {
  items = items.map((i) => {
    if (i.appId === object.appId) {
      console.log(i)
      i = object
    }
    return i
  })
  return items
}
