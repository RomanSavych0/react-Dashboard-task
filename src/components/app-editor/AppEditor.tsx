import React from 'react'
// @ts-ignore
import classes from './appEditor.module.scss'
import Modal from "@material-ui/core/Modal";
import StepperContainer from "../stepper/Stepper-container";
import {IApp} from "../../strore/dashboard/types";
interface Iprops {
    isOpened: boolean
    onClose: () => void
    app:IApp
}

const AppEditor: React.FC<Iprops> = (props) => {
    return (
        <div >
            <Modal className={classes.modalWindowWrapper}
        open={props.isOpened}
        onClose={()=>{props.onClose()}}>
            <div className={classes.modalWindowContentWrapper}>
                    Edit your app

            </div>
        </Modal>
        </div>);
};

export default AppEditor;