import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppName from './steps/appName/AppNameStep'
import Stepper from '@material-ui/core/Stepper/Stepper'
import Step from '@material-ui/core/Step/Step'
import StepLabel from '@material-ui/core/StepLabel/StepLabel'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppImage from './steps/appImage/AppImage'
import AppDescription from './steps/description/AppDescription'
import AppFeatures from './steps/features/AppFeatures'
import AppPreview from './steps/preview/AppPreview'
import { connect } from 'react-redux'
import { AppStateType } from '../../strore/redux-store'
import {
  addAppThunk,
  removeAppThunk,
  setEditApp,
  setIsEditAppMode,
} from '../../strore/dashboard/dashboard-reducer'
import { IApp } from '../../strore/dashboard/types'
import styles from './StepperContainer.module.scss'
import CustomButtom from '.././cusom-button/CustomButton'
interface Iprops {
  addAppThunk: (
    userName: string | null,
    appName: string,
    ImageUrl: Array<string>,
    description: string,
    isMapChecked: boolean,
    isCategoryChecked: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    color: any,
    location: string,
    userId: string | null,
  ) => void
  app: IApp
  removeAppThunk: (name: string | null, app: IApp) => void
  setEditApp: (app: IApp) => void
  setIsEditAppMode: (edit: boolean) => void
  userName: string | null
  userId: string | null
  onClose: () => void
  isEditAppMode: boolean
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
)

function getSteps() {
  return ['Welcome', 'Branding', 'Info', 'Features', 'Preview']
}

const isErrorHandler = (value: string, maxLenght: number) => {
  if (value.length > maxLenght) {
    return true
  } else {
    return false
  }
}
const StepperContainer: React.FC<Iprops> = (props) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [appName, setAppName] = React.useState<string>(props.app.name)
  const [url, setUrl] = React.useState<Array<string>>(props.app.imageUrl)
  const [description, setAppdescription] = React.useState<string>(
    props.app.description,
  )
  const [isError, setIsError] = React.useState<boolean>(false)
  const [isMapChecked, setIsMapChecked] = React.useState<boolean>(
    props.app.isMapChecked,
  )
  const [isCategoryChecked, setIsCategoryChecked] = React.useState<boolean>(
    props.app.isCategoryChecked,
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [color, setColor] = React.useState<any>(props.app.color)
  const [location, setLocation] = React.useState<string>(props.app.location)

  const setAppNameWithValidator = (name: string) => {
    setAppName(name)
    const isErr: boolean = isErrorHandler(appName, 30)
    setIsError(isErr)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDropImage = (file: any, Url: any) => {
    setUrl(Url)
  }

  const finishHandler = () => {
    if (props.isEditAppMode) {
      props.removeAppThunk(props.userId, {
        appId: props.app.appId,
        name: appName,
        imageUrl: url,
        color: color,
        location: location,
        description: description,
        isMapChecked: isMapChecked,
        isCategoryChecked: isCategoryChecked,
      })
      props.setIsEditAppMode(false)
    } else {
      props.addAppThunk(
        props.userName,
        appName,
        url,
        description,
        isMapChecked,
        isCategoryChecked,
        color,
        location,
        props.userId,
      )
    }
    props.setEditApp({
      name: ' ',
      imageUrl: [' '],
      location: '',
      description: '',
      color: {},
      isCategoryChecked: false,
      isMapChecked: false,
    })
    handleNext()
  }

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <AppName
            isError={isError}
            value={appName}
            onAppNameChange={setAppNameWithValidator}
          />
        )
      case 1:
        return (
          <AppImage
            imageUrl={url}
            setAppImage={onDropImage}
            color={color}
            setColor={setColor}
          />
        )
      case 2:
        return (
          <AppDescription
            zoom={11}
            center={{ lat: 59.5, lng: 51 }}
            description={description}
            location={location}
            setLocation={setLocation}
            isError={isError}
            descChanged={setAppdescription}
          />
        )
      case 3:
        return (
          <AppFeatures
            isCategoryChecked={isCategoryChecked}
            isMapChecked={isMapChecked}
            setIsCategoryChecked={setIsCategoryChecked}
            setIsMapChecked={setIsMapChecked}
          />
        )
      case 4:
        return (
          <AppPreview
            appDescription={description}
            appName={appName}
            color={color}
            isCategoryChecked={isCategoryChecked}
            ismapChecked={isMapChecked}
            picture={url}
          />
        )

      default:
        return 'Unknown stepIndex'
    }
  }

  const steps = getSteps()

  const handleNext = () => {
    if (appName.trim().length !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } else {
      setIsError(true)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

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
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>

            <div className={styles.buttonsWrapper}>
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  props.onClose()
                }}
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={styles.buttonsWrapper}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <div>
                {activeStep === steps.length - 1 ? (
                  <CustomButtom onClick={finishHandler} disabled={isError}>
                    Finish
                  </CustomButtom>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={isError}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state: AppStateType) => {
  return {
    app: state.dashboardPage.currentEditApp,
    userName: state.auth.login,
    userId: state.auth.userId,
    isEditAppMode: state.dashboardPage.isEditAppMode,
  }
}
export default connect(mapStateToProps, {
  addAppThunk,
  removeAppThunk,
  setEditApp,
  setIsEditAppMode,
})(StepperContainer)
