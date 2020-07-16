import axios, {AxiosResponse} from "axios";
import {firebaseApp} from "../firebase/firebase";
import {IApp} from "../strore/dashboard/types";
import {replaceEmailToURL} from "../forms/validators";

firebaseApp.database();
const instance = axios.create({
    baseURL: 'https://dashboard-content-editor.firebaseio.com/'
});


export const addAppAPI =  (userName: string | null, app: IApp):Promise<AxiosResponse> => {
    if (userName === null)
        userName = '';
    let url = replaceEmailToURL(userName);
    return  instance.post(`${url}apps.json`, app);

};

export const getDataAPI =  (userName: string | null):Promise<AxiosResponse> => {
    if (userName === null)
        userName = '';
    let url = replaceEmailToURL(userName);
    return instance.get(`${url}apps.json`);
};

export const removeAppAPI = async (userName: string | null, app: IApp) => {
    if (userName === null)
        userName = '';
    let url = replaceEmailToURL(userName);
    instance.get(`${url}apps.json`).then(response => {
                if(response.data !== null) {
                    let itemsKeys = Object.keys(response.data);
                    let itemsValues   = Object.values(response.data);
                    let index = -1;
                    for (let i = 0; i < itemsValues.length; i++) {
                        // @ts-ignore
                        if (itemsValues[i].name === app.name) {

                            index = i;
                        }
                    }
                    let key = itemsKeys[index];


                    return instance.delete(`${url}apps/${key}.json`)
                }}
    );


    return instance.get(`${url}apps.json`);


};
export const authMeAPI = (userEmail: string, userPassword: string):Promise<any> => {
    return firebaseApp.auth().signInWithEmailAndPassword(userEmail, userPassword);
};
export const registerAPI = (userEmail: string, userPassword: string):Promise<any> => {
    return firebaseApp.auth().createUserWithEmailAndPassword(userEmail, userPassword);
};

export const signOutAPI = ():Promise<any> => {
    return firebaseApp.auth().signOut();
};