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
import {Color} from "csstype";
import {ColorChangeHandler, HSLColor, RGBColor} from "react-color";
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {addApp} from "../../strore/dashboard/dashboard-reducer";

interface Iprops {
    addApp:(appName: string, images: Array<File>, ImageUrl: Array<String>, description: string,
            isMapChecked: boolean, isCategoryChecked: boolean, color: any, location: string)=>void
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
    let [appName, setAppName] = React.useState<string>(' ');
    let [images, setAppImage] = React.useState<Array<File>>([]);
    let [url, setUrl] = React.useState<Array<string>>([]);
    let [description, setAppdescription] = React.useState<string>(' ');
    let [isError, setIsError] = React.useState<boolean>(false);
    let [isMapChecked, setIsMapChecked] = React.useState<boolean>(false);
    let [isCategoryChecked, setIsCategoryChecked] = React.useState<boolean>(false);
    let [color, setColor] = React.useState<any>('');
    let [location, setLocation] = React.useState<string>('');
    let finishHandler =()=>{props.addApp(appName, images , url, description, isMapChecked,  isCategoryChecked,color, location);
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
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
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
let mapStateToProps=(state:AppStateType)=>{
    return{}

}
export default connect( mapStateToProps, {addApp})(StepperContainer)