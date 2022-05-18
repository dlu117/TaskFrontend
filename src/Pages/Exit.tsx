import React from "react";
import { Typography, Card, Grid, Button, CardHeader } from "@material-ui/core";

/*

*/

export const LogoffPage = () => {
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
            <CardHeader title = "Signed Off">
            
            </CardHeader>
            <br/>
            <Button variant="contained" href="/home" >Return</Button>
            <br/>
            <br/>
            
        </Card>
        </Grid>
        </Grid>
       
    )
    
};
