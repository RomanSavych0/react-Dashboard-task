import React from 'react'
import ImageUploader from 'react-images-upload'
import classes from './AppImage.module.scss'
import { SketchPicker } from 'react-color'
import classnames from 'classnames'

interface IProps {
  setAppImage: (file: Array<File>, image: string[]) => void
  imageUrl: Array<string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  color: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setColor: (color: any) => void
}

const AppImage: React.FC<IProps> = (props) => {
  return (
    <div className={classnames(classes.AppImage, classes.twoColumn)}>
      <div className={classes.columnItem}>
        <p className={classes.title}>Upload Your App Image</p>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={props.setAppImage}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          singleImage
          withPreview
          style={{
            webkitBoxShadow: '0px 18px 31px 8px rgba(0,0,0,0.75)',
            mozBoxShadow: '0px 18px 31px 8px rgba(0,0,0,0.75)',
            boxShadow: '0px 18px 31px 8px rgba(0,0,0,0.75)',
          }}
        />
      </div>
      <div className={classes.columnItem}>
        <div className={classes.title}>Choose Your Accent Color</div>
        <div className={classes.colorPicker}>
          <SketchPicker
            color={props.color}
            onChange={props.setColor}
            disableAlpha
            width={window.screen.width < 500 ? 'fit-content' : '45%'}
          />
        </div>
      </div>
    </div>
  )
}

export default AppImage
