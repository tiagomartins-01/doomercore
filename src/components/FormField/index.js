import React from "react";
import { FormFieldWrapper } from './style';
import { Input } from './style';

function FormField({ label, type, name, value, onChange, placeholder }){
    return (
        <FormFieldWrapper>
              <Input
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              />
          </FormFieldWrapper>
    );
}

export default FormField;