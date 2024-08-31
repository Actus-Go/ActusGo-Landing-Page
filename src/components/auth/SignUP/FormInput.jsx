import React from 'react';
import { Input } from "@lemonsqueezy/wedges";

const FormInput = ({ label, description, placeholder, name, value, handleChange, startAdornment ,...props}) => (
  <Input
    required
    label={label}
    description={description}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={handleChange}
    startAdornment={startAdornment}
    type={props.password}
  />
);

export default FormInput;