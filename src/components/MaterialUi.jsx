import React from 'react';
import { TextField, RadioGroup, Select, Checkbox } from '@material-ui/core';

export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
      label={label}  
      {...input}
    />
);

const renderCheckbox = ({input, label}) => (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
    />
  )
  
export  const renderRadioGroup = ({input, ...rest}) => (
    <RadioGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )
  
export  const renderSelectField = ({
    input,
    label,
    meta: {touched, error},
    children,
    ...custom
  }) => (
    <Select
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      fullWidth
      {...custom}
    />
  )

export const renderDatePicker = ({input, label, ...rest}) => (
    <TextField
    label={label}
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
    {...input}
    {...rest}
  />
)