import React from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AppName from "./steps/appName/AppNameStep";
import Stepper from "@material-ui/core/Stepper/Stepper";
import Step from "@material-ui/core/Step/Step";
import StepLabel from "@material-ui/core/StepLabel/StepLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppImage from "./steps/appImage/app-image";
import AppDescription from "./steps/description/app-desription";
import AppFeatures from "./steps/features/app-features";
import AppPreview from "./steps/preview/App-preview";
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {addAppThunk, removeApp, removeAppThunk, setEditApp} from "../../strore/dashboard/dashboard-reducer";
import {IApp} from "../../strore/dashboard/types";
// @ts-ignore
import styles from './StepperContainer.module.scss'

interface Iprops {
    addAppThunk: (userName: string | null, appName: string, ImageUrl: Array<string>, description: string,
                  isMapChecked: boolean, isCategoryChecked: boolean, color: any, location: string) => void
    app: IApp
    removeAppThunk: (name: string|null, app: IApp) => void
    setEditApp: (app: IApp) => void
    userName: string | null
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

function getSteps() {
    return ['Welcome', 'Branding', 'Info', 'Features', 'Preview'];
}


let isErrorHandler = (value: string, maxLenght: number) => {
    if (value.length > maxLenght) {
        return true
    } else {
        return false;
    }
};
let StepperContainer: React.FC<Iprops> = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    let setAppNameWithValidator = (name: string) => {
        setAppName(name);
        let isErr: boolean = isErrorHandler(appName, 30);
        setIsError(isErr);
    };
    let onDropImage = (Files: any, Url: any) => {
        setAppImage(Files);
        setUrl(Url);
    };
    let [appName, setAppName] = React.useState<string>(props.app.name);
    let [images, setAppImage] = React.useState<Array<File>>([]);
    let [url, setUrl] = React.useState<Array<string>>(props.app.imageUrl);
    let [description, setAppdescription] = React.useState<string>(props.app.description);
    let [isError, setIsError] = React.useState<boolean>(false);
    let [isMapChecked, setIsMapChecked] = React.useState<boolean>(props.app.isMapChecked);
    let [isCategoryChecked, setIsCategoryChecked] = React.useState<boolean>(props.app.isCategoryChecked);
    let [color, setColor] = React.useState<any>(props.app.color);
    let [location, setLocation] = React.useState<string>(props.app.location);
    let finishHandler = () => {
        props.removeAppThunk(props.userName,props.app);
        props.addAppThunk(props.userName, appName, url, description,
            isMapChecked, isCategoryChecked, color, location);
        //
        props.setEditApp({
            name: ' ', imageUrl: [' '], location: '', description: '',
            color: {}, isCategoryChecked: false, isMapChecked: false,
        });
        handleNext();
    };


    function getStepContent(stepIndex: number) {

        switch (stepIndex) {
            case 0:
                return <AppName isError={isError} value={appName} onAppNameChange={setAppNameWithValidator}/>;
            case 1:
                return <AppImage imageUrl={url} setAppImage={onDropImage}
                                 color={color} setColor={setColor}
                />;
            case 2:
                return <AppDescription zoom={11} center={{lat: 59.5, lng: 51}} description={description}
                                       location={location} setLocation={setLocation}
                                       isError={isError}
                                       descChanged={setAppdescription}/>;
            case 3:
                return <AppFeatures isCategoryChecked={isCategoryChecked} isMapChecked={isMapChecked}
                                    setIsCategoryChecked={setIsCategoryChecked} setIsMapChecked={setIsMapChecked}/>;
            case 4:
                return <AppPreview appDescription={description} appName={appName} color={color}
                                   isCategoryChecked={isCategoryChecked}
                                   ismapChecked={isMapChecked} picture={url}
                />;

            default:
                return 'Unknown stepIndex';
        }
    }

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div className={styles.finalStep}>
                        <Typography className={classes.instructions}>All steps completed</Typography>

                        <Button  variant="contained" color="primary" onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className={styles.buttonsWrapper}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <div>
                                {activeStep === steps.length - 1 ?
                                    (<Button variant="contained" color="primary" onClick={finishHandler}
                                             disabled={isError}>
                                            Finish
                                        </Button>
                                    ) : (
                                        <Button variant="contained" color="primary" onClick={handleNext}
                                                disabled={isError}>
                                            Next
                                        </Button>
                                    )


                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};
let mapStateToProps = (state: AppStateType) => {
    return {
        app: state.dashboardPage.currentEditApp,
        userName: state.auth.login
    }

};
export default connect(mapStateToProps, {addAppThunk, removeAppThunk, setEditApp})(StepperContainer)