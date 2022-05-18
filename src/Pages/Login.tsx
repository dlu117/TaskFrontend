import React from "react";
import { Typography, Card, Grid, Button, CardHeader } from "@material-ui/core";


export const LoginPage = () => {
  
        return (
          <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}
          >
              <Grid item >
           <Card>
               <CardHeader title = "Welcome">
               
               </CardHeader>
               <br/>
               <Button variant="contained" href="/home" >Enter</Button>
               <br/>
               <br/>
               
           </Card>
           </Grid>
           </Grid>
          
    )
    
};
