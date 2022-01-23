import React from 'react';
import Image from "../common/Images/logo.png"
import Image1 from "../common/Images/logo1.png";
import {
    CardContent,
    Card,
    Grid,
    Typography,
   
  } from "@material-ui/core";

function ResetSuccessfull() {
  return (
      <>
 <Grid
        container
        spacing={24}
        justify="center"
        sm={12}
        //   style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        <Grid item xs={10} sm={6} md={4} lg={4} align="center">
          <img
            src={Image}
            alt=""
            style={{
              width: "20%",
              height: "5%",
              marginTop: "15%",
            }}
          />

          <Card
            style={{
              width: "100%",
              height: "50vh",
              marginTop: "20%",
            }}
          >
            <CardContent sx={1} md={6} lg={6}>
              <img
                src={Image1}
                alt=""
                style={{
                  width: "15%",
                  height: "15%",
                  marginTop: "1%",
                  marginBottom: "5%",
                }}
              />
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "600",

                    // fontSize: "140%",
                    // fontSize:"3rem",
                    fontFamily: "CircularStd",
                    width: "75%",
                  }}
                >
                  Congratulation!
                </Typography>

                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "600",
                    // fontSize: "140%",
                    // fontSize:"3rem",
                    fontFamily: "CircularStd",
                    width: "75%",
                  }}
                >
                  Your Password was changed successfully
                </Typography>
                <Typography
                  variant="subtitle4"
                  style={{
                    marginTop: "1%",
                    fontWeight: "300",
                    padding: "4px 4px 4px 4px",
                    // fontSize: "96%",

                    fontFamily: "CircularStd",
                  }}
                  fontSize={{
                    lg: 30,
                    md: 100,
                    sm: 15,
                    xs: 10,
                  }}
                >
                  We have sent a proof of password change
                </Typography>

                <Typography
                  variant="subtitle4"
                  style={{
                    marginTop: "1%",
                    fontWeight: "300",
                    width: "10%",
                    // fontSize: "96%",
                    fontFamily: "CircularStd",
                    marginBottom: "60%",
                  }}
                  fontSize={{
                    lg: 30,
                    md: 100,
                    sm: 15,
                    xs: 10,
                  }}
                >
                  your registered email.
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </>
  )
}

export default ResetSuccessfull;
