import React from 'react'
import classes from './AppDescription.module.scss'
import { TextField } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import classnames from 'classnames'

interface IProps {
  description: string
  descChanged: (newDeskValue: string) => void
  location: string
  setLocation: (location: string) => void
  center: {
    lat: number
    lng: number
  }
  zoom: number
  isError: boolean
}

const AppDescription: React.FC<IProps> = (props) => {
  return (
    <div className={classnames(classes.Info, classes.twoColumn)}>
      <div className={classes.columnItem}>
        <p className={classes.title}>Add Your Description</p>
        <TextField
          id="app_desc"
          label="Add a description of your app"
          placeholder="Add a description of your app"
          multiline
          variant="outlined"
          defaultValue={props.description}
          onChange={(e) => props.descChanged(e.target.value)}
          fullWidth={true}
          size="medium"
        />
      </div>
      <div className={[classes.columnItem].join(' ')}>
        <p className={classes.title}>Enter your location</p>
        <TextField
          id="app_location"
          label="Add a location of your app"
          placeholder="Add a location of your app"
          multiline
          variant="outlined"
          defaultValue={props.location}
          onChange={(e) => props.setLocation(e.target.value)}
          fullWidth
        />
        <div className={classes.map}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`,
            }}
            defaultCenter={props.center}
            defaultZoom={props.zoom}
          >
            <p>
              lat={59.955413}
              lng={30.337844}
              text={'MyMarker'}
            </p>
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}

export default AppDescription
