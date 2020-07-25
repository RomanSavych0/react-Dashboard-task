import React from "react";
import Modal from "@material-ui/core/Modal";
import classes from "./appEditor.module.scss";
import StepperContainer from "../stepper/StepperContainer";
interface Iprops {
  isOpened: boolean;
  onClose: () => void;
}

const AppCreator: React.FC<Iprops> = (props) => {
  return (
    <div>
      <Modal
        className={classes.modalWindowWrapper}
        open={props.isOpened}
        onClose={() => {
          props.onClose();
        }}
      >
        <div className={classes.modalWindowContentWrapper}>
          <StepperContainer onClose={props.onClose} />
        </div>
      </Modal>
    </div>
  );
};

export default AppCreator;
