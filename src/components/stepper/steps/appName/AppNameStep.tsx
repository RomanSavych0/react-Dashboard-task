import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
// @ts-ignore
import classes from './AppName.module.scss';
import {maxLength, maxLength15} from "../../../../forms/validators";
interface IProps {
    value: string
    onAppNameChange: (appName:string) => void
    setIsError:(err:boolean)=>void
    isError:boolean
}


let AppName: React.FC<IProps> = (props) => {


    let isError=()=>{
        if(props.value.length >15 || props.value.length < 3) {
            props.setIsError(true);
        return true;
        }
        else {
            props.setIsError(false);
        return false
        }
    };


    return (<div className={classes.Welcome}>
            <p className={classes.title}>Welcome! Let us help you get started!</p>
            <div className={classes.twoColumn}>
                <p className={classes.boldTitle}>App Name</p>
                <TextField
                    error={isError()}
                    id="app_name"
                    label=  "Your App Name"
                    variant="outlined"
                    defaultValue={props.value}
                    onChange={(event)=>{props.onAppNameChange(event.target.value);
                    }}
                />
                <span className={classes.errorMessage}>{props.isError?<div>Max lenght must be 15
                App name is required
                </div>:<div></div>}</span>
            </div>
            <p>
                Remember, you can always change your options in our App Configuration
                screens.
            </p>
        </div>
    );
};
export default AppName;



