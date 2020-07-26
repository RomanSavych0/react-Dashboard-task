import { firebaseApp } from '../firebase/firebase'
import { IApp } from '../strore/dashboard/types'

const database = firebaseApp.database()

export const addAppAPI = (userId: string | null, app: IApp) => {
  return database.ref('users/' + userId + `/apps/`).push(app)
}

export const getDataAPI = (userId: string | null): Promise<any> => {
  return database.ref('users/' + userId + '/apps').once('value')
}

export const removeAppAPI = async (userId: string | null, app: IApp) => {
  return database
    .ref('users/' + userId + '/apps')
    .child(app.appId as string)
    .update({
      name: app.name,
      description: app.description,
      imageUrl: app.imageUrl,
      isCategoryChecked: app.isCategoryChecked,
      isMapChecked: app.isMapChecked,
      location: app.location,
    })
}
export const authMeAPI = (
  userEmail: string,
  userPassword: string,
): Promise<any> => {
  return firebaseApp.auth().signInWithEmailAndPassword(userEmail, userPassword)
}
export const registerAPI = (
  userEmail: string,
  userPassword: string,
): Promise<any> => {
  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPassword)
}

export const signOutAPI = (): Promise<any> => {
  return firebaseApp.auth().signOut()
}
