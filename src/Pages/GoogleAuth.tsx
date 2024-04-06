import React from "react";
import { Typography, Card, Grid, Button, CardHeader } from "@material-ui/core";
import GoogleLogin from 'react-google-login';



export const GoogleLoginPage = () => {
    

    const responseGoogle = (response:any) => {
            console.log(response);
          }
        return (
          
            <GoogleLogin
            clientId="
            492016456854-gjs90moqlh4l1l3g3l2hfofcbfkk4tl1.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
           
          />
    )
    
};
