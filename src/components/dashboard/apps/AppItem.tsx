import React from 'react'
import {IApp} from "../../../strore/dashboard/types";
// @ts-ignore
import classes from './AppItem.module.scss'
import Button from '@material-ui/core/Button';
import AppEditor from "../../app-editor/AppEditor";

interface Iprops{
    app:IApp
    closeEditor:()=>void
    openEditor:()=>void

}

let AppItem:React.FC<Iprops>=(props)=>{

    return(
        <div className={classes.appWrapper}>
            <div className={classes.item}>
                {
                    <img src={`${props.app.imageUrl[0]}`} alt="app"/>
                }
            </div>
            <div className={classes.item}><h4>{props.app.name}</h4></div>
            <div className={classes.item} >
                <Button variant="contained" color="primary" onClick={props.openEditor}>
                    Edit App
            </Button>

            </div>

        </div>
    )

};
export default AppItem