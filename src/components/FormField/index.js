import React from "react";
import "./style.css";

function FormField({ label, type, name, value, onChange }){
    return (
        <div>
            <label>
              {label}: 
              <input
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              />
            </label>
          </div>
    );
}

export default FormField;