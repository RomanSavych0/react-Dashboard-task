import React, {PropsWithChildren} from 'react';
import TextField from "@material-ui/core/TextField";
import {WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

interface IrenderField {
    input:WrappedFieldInputProps
    label:string
    type:string
    meta:WrappedFieldMetaProps
}

export const renderField:React.FC<IrenderField>  = ({input, label, type, meta: {touched, error, warning}}) => {

    return (<div>
        <label>{label}</label>
        <div>
            <TextField error={error} {...input} placeholder={label} type={type} label={error}/>
            {/*{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}*/}
        </div>
    </div>)
};
