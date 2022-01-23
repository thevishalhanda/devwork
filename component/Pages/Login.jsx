import {
    CardContent,
    Card,
    Grid,
    Typography,
    TextField,
    Button,
    withStyles
  } from "@material-ui/core";
  import { SecuritySharp } from "@material-ui/icons";
  
  import React, { useState } from "react";
import ButtonComponent from "../common/Forms/ButtonComponent";
import InputField from "../common/Forms/InputFieldComponent";
  import Image from "../common/Images/logo.png";

export default function LoginPage() {

  const [user, setUser] = useState({
    userid: "",
    password: "",
  });

  const [error, setError] = useState({
    userid: "false",
    password: "false",
  });


    
    const handleChange = (event) => {
      const data = { ...user };
      data[event.target.name] = event.target.value;
      setUser(data);
      console.log(user.password)
      console.log(user.userid)
      const Error = { ...error };
      Error[event.target.name] = event.target.value;
      setError(Error);

    
    }


    const handleSubmit = (event) => {
      console.log("enter");
      if (!user.password && !user.userid) {
        setError({
          userid: "true",
          password: "true",
        });
      } else if (!user.userid) {
        setError({
          userid: "true",
          password: "false",
        });
      } else if (!user.password) {
        setError({
          userid: "false",
          password: "true",
        });
      }
    };



  return (
      <>
          
      <Grid container xs={12} md={12} lg={12} justify="center">
        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={4}
          align="center"
          direction="column"
          justifyContent="space-between"
        >
          <img
            src={Image}
            alt=""
            style={{
              width: "20%",
              height: "4.5%",
              marginTop: "7%",
            }}
          />

          <Card
            style={{
              width: "100%",
              height: "70vh",
              marginTop: "10%",
              borderRadius: "3%",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontWeight: "600",
                  marginTop: "10%",
                  fontSize: "200%",
                  letterSpacing: "-0.5px",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                }}
              >
                Hello Alberto, 
              </Typography>

              <Typography
                style={{
                  fontWeight: "450",
                  marginTop:"2%",
                  color: "#18191D",
                  fontSize: "80%",
                  // fontSize:"3rem",
                  width:"60%",
                  fontFamily: "CircularStd",
                }}
              >
              Enter your Identity Document and set a password to log into VIZI.
              </Typography>

                <InputField
                   name = "userid"
                
                    label = "ID"
                    onChange = {handleChange}
                    error = {error.userid === "true"}
                    helperText = {
                      error.userid === "true" ? "Enter the User ID" : ""
                    }

                />
                <InputField
                    name = "password"
                    label = "Password"
                    type  = "password"
                    error = {error.password === "true"}
                    helperText = {
                      error.password === "true" ? "Enter the Password" : ""
                    }
                    onChange = {handleChange}

                />
                    
               
              

              <Typography
               variant="subtitle1"
                  style={{
                    fontWeight: "300",
                    width:"100%",    
                    fontFamily: "CircularStd",
                    fontSize:"82%", 
                    marginTop:"2%"

                  }}

              >


              <SecuritySharp style={{fontSize:"0.8rem",color:"grey",margin:"0% 1.5% 0% 1.5%" }} />
              A strong password is 8 characters long, 

              </Typography>
               
              <Typography
               variant="subtitle1"
                  style={{
                    marginTop: "-1%",
                    fontWeight: "300",
                    width:"100%",   
                    fontSize:"82%", 
                    fontFamily: "CircularStd",
                  }}

              >
              between lowercase, uppercase, and numbers.


              </Typography>
                
                <ButtonComponent 
                    label = "Log in"
                    onClick = {handleSubmit}


                    style = {{
                        width:"70%",
                      background:"black",
                      height:"70%",
                      color:"white",
                      marginTop:"5%",
                      marginBottom:"40%",
                      borderRadius:"1.5rem",
                      backgroundColor:"#10B76A",
                      fontFamily:"CircularStd",
                      padding:"2.8% 2.8% 2.8% 2.8%",
                      textTransform:"none",
                      fontSize:"100%",
                      letterSpacing:"5%"

                    }}
                />


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
