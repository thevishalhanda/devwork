import React from "react";
import { TextField } from "@material-ui/core";
import "./global.css";

function InputField(props) {
  return (
    <>
      <TextField
        id="outlined-basic"
        className={props.className ?? "inputRounded"}
        label={props.label}
        type={props.type}
        name={props.name}
        variant="outlined"
        style={{
          width: "70%",
          margin:"2% 2% 2% 2%"
 
        }}
        error={props.error}
        helperText={props.helperText}
        InputProps={props.InputProps}
        InputLabelProps={{
          style: {
            fontSize: 14,
            backgroundColor: "#FFF",
            paddingLeft: 4,
            paddingRight: 4,
            color: "#383838",
            margin:"0% 0% 0% 0%"
          },
        }}
        inputProps={{
          style: {
            width: "100%",
            fontSize: 14,
            height: 45,
            padding: "0 14px",
            fontWeight: "bold",
          },
        }}
        onChange={props.onChange}
        onClick={props.onClick}
      ></TextField>
    </>
  );
}

export default InputField;
