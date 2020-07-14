import React from 'react'
import {IApp} from "../../../strore/dashboard/types";
import AppItem from "./AppItem";

interface IProps {
    Apps: Array<IApp>
}

let Apps: React.FC<IProps> = (props) => {
    let AppsItems = props.Apps.map(a => {
        return <AppItem app={a}/>
    });

    return (
        <div>
            {AppsItems}
        </div>
    )

};
export default Apps;