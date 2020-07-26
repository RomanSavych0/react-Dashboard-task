import React from 'react'
import TextField from '@material-ui/core/TextField'
import classes from './AppName.module.scss'

interface IProps {
  value: string
  onAppNameChange: (appName: string) => void
  isError: boolean
}

const AppName: React.FC<IProps> = (props) => {
  return (
    <div className={classes.Welcome}>
      <p className={classes.title}>Welcome! Let us help you get started!</p>
      <div className={classes.twoColumn}>
        <div className={classes.boldTitle}>App Name</div>
        <TextField
          error={props.isError}
          id="app_name"
          label="Your App Name"
          variant="outlined"
          defaultValue={props.value}
          onChange={(event) => {
            props.onAppNameChange(event.target.value)
          }}
          required={true}
          helperText={
            props.isError ? 'Max length must be 15.' + 'Field is required!' : ''
          }
        />
      </div>
      <p>
        Remember, you can always change your options in our App Configuration
        screens.
      </p>
    </div>
  )
}
export default AppName
