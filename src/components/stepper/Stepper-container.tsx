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
interface Iprops{

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
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad' , 'Features' , 'Editor'];
}
interface Icenter{
    lat:any
    lng:any
}
let StepperContainer:React.FC<Iprops>=()=>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    let [appName , setAppName] =React.useState<string>(' ');
    let [images , setAppImage] =React.useState<Array<File>>([]);
    let [url , setUrl]=React.useState<Array<string>>([]);


   let  onDropImage=(Files:any , Url:any)=>{
        setAppImage(Files);
        setUrl(Url);
    };
    let [description , setAppdescription] =React.useState<string>(' ');
    let [center , setCenter] = React.useState<Icenter>({lat:59.5,lng:51});
    let [zoom , setZoom]= React.useState<number>(11);
    let [isError, setIsError] = React.useState<boolean>(false);


    function getStepContent(stepIndex: number) {

        switch (stepIndex) {
            case 0:
                return <AppName setIsError ={setIsError} isError={isError} value ={appName}  onAppNameChange={setAppName}/>;
            case 1:
                return <AppImage imageUrl ={url} setAppImage={onDropImage}/>;
            case 2:
                return <AppDescription zoom={zoom} center ={center} description={description} descChanged={setAppdescription}/>;
            case 3:
                return 'Features';
            case 4:
                return 'FinalEditor';

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

    return(
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
                            <Button variant="contained" color="primary" onClick={handleNext} disabled={isError}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};
export default StepperContainer