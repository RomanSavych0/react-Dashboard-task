import React from 'react';
// @ts-ignore
import classes from './AppFeatures.module.scss';
import {Switch} from "@material-ui/core";

// @ts-ignore
import categoriesImg from '../../../../asserts/images/categories.jpg'
// @ts-ignore
import mapImg from '../../../../asserts/images/map.png'


interface Iprops {
    isCategoryChecked:boolean
    isMapChecked:boolean
    setIsCategoryChecked:(isChecked:boolean)=>void
    setIsMapChecked:(isChecked:boolean)=>void

}

const  AppFeatures:React.FC<Iprops> = (props) => {
    return (
        <div className={[classes.Features, classes.twoColumn].join(' ')}>
            <div>
                <img src={categoriesImg} alt="categories" />
                <p className={classes.boldTitle}>Categories</p>
                <p>Include more than one list or categories.</p>
                <Switch
                    checked={props.isCategoryChecked}
                    onChange={()=>{props.setIsCategoryChecked(!props.isCategoryChecked)}}
                    value="categories"
                    color="primary"
                />
            </div>
            <div>
                <img src={mapImg} alt="categories" />
                <p className={classes.boldTitle}>GPS maps</p>
                <p>Include a GPS map</p>
                <Switch
                    checked={props.isMapChecked}
                    onChange={()=>{props.setIsMapChecked(!props.isMapChecked)}}
                    value="categories"
                    color="primary"
                />
            </div>
        </div>

    )
}

export default AppFeatures