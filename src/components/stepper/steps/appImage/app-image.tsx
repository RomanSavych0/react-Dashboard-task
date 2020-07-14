import React, {useState} from 'react'
import ImageUploader from "react-images-upload";

interface IProps {
    setAppImage:(file:Array<File>, image:string[]) => void

    imageUrl:Array<string>
}

let AppImage: React.FC<IProps> = (props) => {


    const onDrop = (picture: Array<File>) => {

    };
    return (

        <div>
            {/*<div>*/}
            {/*    <img src={props.imageUrl[0]} alt=""/>*/}
            {/*</div>*/}
            {console.log(props.imageUrl)}
                <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={props.setAppImage}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage
                    withPreview
                    />
            <div>
                Choose Your Accent Color
            </div>
        </div>
    )
};

export default AppImage;