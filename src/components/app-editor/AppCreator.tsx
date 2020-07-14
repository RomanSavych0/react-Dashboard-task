import React, {useEffect, useState} from 'react';
import Modal, {ModalProps} from '@material-ui/core/Modal';
// @ts-ignore
import classes from './appEditor.module.scss'
import StepperContainer from "../stepper/Stepper-container";
interface Iprops {
    isOpened: boolean
    onClose: () => void
}

const AppCreator: React.FC<Iprops> = (props) => {
    return (
        <div >
        <Modal className={classes.modalWindowWrapper}
            open={props.isOpened}
            onClose={()=>{props.onClose()}}>
            <div className={classes.modalWindowContentWrapper}>
                <StepperContainer/>
            </div>
        </Modal>
        </div>
    );
};

export default AppCreator;
