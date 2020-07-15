import axios, {AxiosResponse} from "axios";
import {firebaseApp} from "../firebase/firebase";
import * as firebase from "../components/login/Login";
import {IApp} from "../strore/dashboard/types";
import {replaceEmailToURL} from "../forms/validators";

const db = firebaseApp.database();

const instance = axios.create({
    baseURL: 'https://dashboard-content-editor.firebaseio.com/'
});
export let addAppAPI = async (userName: string | null, app: IApp) => {
    if (userName === null)
        userName = '';
    let url = replaceEmailToURL(userName);
    return await instance.post(`${url}apps.json`, app);

};

export let getDataAPI = async (userName: string | null) => {
    if (userName === null)
        userName = '';
    let url = replaceEmailToURL(userName);
    return instance.get(`${url}apps.json`);
};
export let removeAppAPI = async (userName: string | null, app: IApp) => {
    if (userName === null)
        userName = '';
    let url = replaceEmailToURL(userName);
    instance.get(`${url}apps.json`).then(response => {
        console.log(response.data);
                if(response.data !== null) {
                    let itemsKeys = Object.keys(response.data);
                    let itemsValues = Object.values(response.data);
                    let index = -1;
                    for (let i = 0; i < itemsValues.length; i++) {
                        // @ts-ignore
                        if (itemsValues[i].name === app.name) {
                            // @ts-ignore
                            console.log(itemsValues[i].name + "is equal " + app.name);
                            index = i;
                        }
                    }
                    let key = itemsKeys[index];


                    let indexAppToDelete = itemsValues.indexOf(app);
                    return instance.delete(`${url}apps/${key}.json`)
                }}
    );


    return instance.get(`${url}apps.json`);


};
export const authMeAPI = (userEmail: string, userPassword: string) => {


    return firebaseApp.auth().signInWithEmailAndPassword(userEmail, userPassword);
};
export const signOutAPI = () => {
    return firebaseApp.auth().signOut();
};