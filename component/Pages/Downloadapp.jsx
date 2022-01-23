import { Box, Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import Image from "../common/Images/logo.png"
import { Typography, Paper } from '@material-ui/core';
import frame from "../common/Images/Frame.png";
import frame1 from "../common/Images/Frame1.png";
import Iphone from "../common/Images/iphone-white.png";

export default function DownloadApp() {
  return (
      <>

<Grid
        container
        spacing={24}
        justify="center"
        sm={12}
        //   style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        <Grid item xs={12} sm={10} md={12} lg={10} align="center"
         justifyContent='center'
        >
          <img
            src={Image}
            alt=""
            style={{
              width: "15%",
              height: "3.8%",
              marginTop: "6%",
            }}
          />

          <Card
            style={{
              width: "100%",
              marginTop: "5%",
              height:"100%"
            }}
            elevation={0}
          >
            <CardContent sx={1} md={10} lg={6}>
              
               <Typography
                style = {{
                    fontSize:"215%",
                    fontFamily:"CircularStd",
                    fontWeight:"550",
                    letterSpacing:"20%"
                }}
               >
                   Download Vizi to start working in
               </Typography>
               <Typography
               style = {{
                    fontSize:"215%",
                    fontFamily:"CircularStd",
                    fontWeight:"550",
                    letterSpacing:"20%"


                }}
               >
                       your establishment
                     </Typography>
                     <img src = {frame1} 
                  style = {{
                      width:"20%",
                      height:"5%",
                      margin:"3% 2% 0% 2%",


                  }}
                  alt = "" /> 
                  <img src = {frame} 
                  style = {{
                      width:"20%",
                      height:"5%",
                      margin:"3% 2% 0% 2%",
                                           

                  }}
                  alt = "" />
              

                <img src = {Iphone} alt = ""
                     style = {{
                         width:"55%",
                         height:"50%",
                         marginTop:'3%'
                         
                     }}

                />
                   
                </CardContent>




          </Card>
        </Grid>
      </Grid>
           
      </>
  )
}
