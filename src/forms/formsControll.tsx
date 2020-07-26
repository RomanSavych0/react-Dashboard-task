import React from 'react'

import TextField from '@material-ui/core/TextField'

import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'

interface IrenderField {
  input: WrappedFieldInputProps

  label: string

  type: string

  meta: WrappedFieldMetaProps
}

export const renderField: React.FC<IrenderField> = ({
  input,

  label,

  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>

      <div>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          error={error}
          {...input}
          placeholder={label}
          type={type}
          label={error}
          autoFocus
          autoComplete="email"
        />
      </div>
    </div>
  )
}
