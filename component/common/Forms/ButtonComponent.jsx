import React from 'react';
import {Button} from "@material-ui/core"



function ButtonComponent(props) {
  return (
      <>
        <Button
         
         onClick={props.onClick}
          style = {props.style ??  {
                      width:"70%",
                      background:"black",
                      height:"70%",
                      color:"white",
                      fontWeight:"bold",
                      marginTop:"5%",
                      marginBottom:"100%",
                      borderRadius:"1.5rem",
                      backgroundColor:"#D9E7EB",
                      color:"#7C8E93",
                      fontFamily:"CircularStd",
                      padding:"3% 3% 3% 3%"

                  }}
        
        >{
            props.label
        }
        </Button>
      </>
  )
}

export default ButtonComponent;
