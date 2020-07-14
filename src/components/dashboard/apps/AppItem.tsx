import React from 'react'
import {IApp} from "../../../strore/dashboard/types";
// @ts-ignore
import classes from './AppItem.module.scss'
interface Iprops{
    app:IApp
}

let AppItem:React.FC<Iprops>=(props)=>{

    return(
        <div className={classes.appWrapper}>
            <div>
                {
                    <img src={`${props.app.imageUrl[0]}`} alt="app"/>

                }
            </div>
            <div><p>{props.app.name}</p></div>
            <div>BTN</div>

        </div>
    )

};
export default AppItem