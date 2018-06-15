import React from "react";
import {
  TextField,
  RadioGroup,
  Select,
  Checkbox,
  InputLabel
} from "@material-ui/core";

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField label={label} fullWidth={true} {...input} {...custom} />;

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <div>
    <InputLabel htmlFor={label} >{label}</InputLabel>
    <Select
      {...input}
      onChange={value => input.onChange(value)}
      children={children}
      {...custom}
      fullWidth
    />
  </div>
);

export const renderDatePicker = ({ input, label, ...rest }) => (
  <TextField
    label={label}
    type="date"
    InputLabelProps={{
      shrink: true
    }}
    {...input}
    {...rest}
    fullWidth={true}
  />
);
