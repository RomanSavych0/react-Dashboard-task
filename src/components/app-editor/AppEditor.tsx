import React, {useEffect, useState} from 'react';
import Modal, {ModalProps} from '@material-ui/core/Modal';
// @ts-ignore
import classes from './appEditor.module.scss'
import HorizontalNonLinearStepper from "../stepper/stepper";
import StepperContainer from "../stepper/Stepper-container";
interface Iprops {
    isOpened: boolean
    onClose: () => void
}

const AppEditor: React.FC<Iprops> = (props) => {
    // let [open ,setIsOpen] = useState(props.isOpened);
    //    useEffect(()=>{
    //        setIsOpen(true)
    //        }
    //    ,[props.isOpened]);
    //     console.log(open);

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

export default AppEditor;
