import React from 'react'
import { IApp } from '../../../strore/dashboard/types'
import AppItem from './AppItem'
import classes from './Apps.module.scss'

interface IProps {
  apps: Array<IApp>
  isOpened: () => void
  isClosed: () => void
  setApp: (app: IApp) => void
  setIsEditAppMode: (isEdit: boolean) => void
}

const Apps: React.FC<IProps> = (props) => {
  const AppsItems = props.apps.map((a, i) => {
    return (
      <AppItem
        key={i}
        setIsEditAppMode={props.setIsEditAppMode}
        app={a}
        closeEditor={props.isClosed}
        openEditor={props.isOpened}
        setApp={props.setApp}
      />
    )
  })
  return <div className={classes.appsList}>{AppsItems}</div>
}
export default Apps
