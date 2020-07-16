import React from 'react';
import classes from './AppPreview.module.scss';

interface Iprops {
    picture: Array<string>
    color: any
    appName: string
    appDescription: string
    isCategoryChecked: boolean
    ismapChecked: boolean
}

const AppPreview: React.FC<Iprops> = (props) => {
   let color;
    if(props.color ===undefined) {
        color = "#fff"
    }else {
        color = props.color.hex
    }


    return (
        <div className={classes.Preview}>
            <img src={props.picture[0]} alt="app"/>
            <p>

                Accent: <span style={{color: color}}>{color}</span>
            </p>

            <p>App name: {props.appName}</p>
            <p>App description: {props.appDescription}</p>
            <p>Categories: {props.isCategoryChecked ? 'yes' : 'no'}</p>
            <p>Maps: {props.ismapChecked ? 'yes' : 'no'}</p>
        </div>
    );
};

export default AppPreview;
