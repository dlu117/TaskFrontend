import React from "react";
import { Typography, Card, Grid, Button, CardHeader } from "@material-ui/core";
import GoogleLogin from 'react-google-login';



export const LogoffPage = () => {
    

    const responseGoogle = (response:any) => {
            console.log(response);
          }
        return (
            <GoogleLogin
            clientId="492016456854-alu8qhfbervfops7t4b6arb9el3oslkh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
           
          />
    )
    
};
