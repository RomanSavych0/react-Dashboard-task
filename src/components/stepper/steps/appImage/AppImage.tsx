import React from 'react'
import ImageUploader from "react-images-upload";
// @ts-ignore
import classes from './AppImage.module.scss';
// @ts-ignore
import {SketchPicker} from 'react-color';

interface IProps {
    setAppImage: (file: Array<File>, image: string[]) => void
    imageUrl: Array<string>
    color: any
    setColor: (color: any) => void
}

let AppImage: React.FC<IProps> = (props) => {

    return (
        <div className={[classes.AppImage, classes.twoColumn].join(' ')}>
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
                />
            </div>
            <div className={classes.columnItem}>
                <p className={classes.title}>Choose Your Accent Color</p>
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
};

export default AppImage;