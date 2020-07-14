import React, {useState} from 'react'
// @ts-ignore
import classes from './AppDescription.module.scss'
import {TextField} from "@material-ui/core";
import GoogleMapReact from 'google-map-react';



interface IProps {
    description:string
    descChanged:(newDeskValue:string)=>void
    center:{
    lat:number
    lng:number
    },
    zoom:number
}



let AppDescription: React.FC<IProps> = (props) => {



    return (<div className={[classes.Info, classes.twoColumn].join(' ')}>
            <div className={classes.columnItem}>
                <p className={classes.title}>Add Your Description</p>
                <TextField
                    id="app_desc"
                    label="Add a description of your app"
                    placeholder="Add a description of your app"
                    multiline
                    variant="outlined"
                    defaultValue={props.description}
                    onChange={(e)=> props.descChanged(e.target.value)}
                    fullWidth
                />
            </div>
            <div className={[classes.columnItem].join(' ')}>
                <p className={classes.title}>Enter your location</p>
                <div className={classes.map}>
                    <GoogleMapReact
                        defaultCenter={props.center}
                        defaultZoom={props.zoom}
                    >
                        <p>
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        </p>
                    </GoogleMapReact>
                </div>

            </div>

        </div>
    )
};

export default AppDescription;