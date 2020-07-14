import React from 'react'
import {IApp} from "../../../strore/dashboard/types";
import AppItem from "./AppItem";
// @ts-ignore
import classes from './Apps.module.scss'
interface IProps {
    apps: Array<IApp>
    isOpened:()=>void
    isClosed:()=>void
}

let Apps: React.FC<IProps> = (props) => {
    let AppsItems = props.apps.map(a => {
        return <AppItem app={a}
                        closeEditor={props.isClosed}
                        openEditor ={props.isOpened}
        />
    });

    return (
        <div className={classes.appsList}>
            {AppsItems}
        </div>
    )

};
export default Apps;