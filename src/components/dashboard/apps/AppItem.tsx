import React from 'react'
import { IApp } from '../../../strore/dashboard/types'
import classes from './AppItem.module.scss'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'
import appDefaultImage from '../../../asserts/images/default-image.png'

interface Iprops {
  app: IApp
  closeEditor: () => void
  openEditor: () => void
  setApp: (app: IApp) => void
  setIsEditAppMode: (isEdit: boolean) => void
}

const AppItem: React.FC<Iprops> = (props) => {
  console.log(props.app.imageUrl)
  return (
    <Paper className={classes.appWrapper}>
      <div className={classes.item}>
        {
          <img
            src={`${
              props.app.imageUrl === undefined || props.app.imageUrl[0] === ' '
                ? appDefaultImage
                : props.app.imageUrl[0]
            }`}
            alt="app"
          />
        }
      </div>
      <div className={classes.item}>
        <h4>{props.app.name}</h4>
      </div>
      <div className={classes.item}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.setApp(props.app)
            props.openEditor()
            props.setIsEditAppMode(true)
          }}
        >
          Edit App
        </Button>
      </div>
    </Paper>
  )
}
export default AppItem
