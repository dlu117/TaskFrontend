import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { FooterIcon, FooterIconProps } from "./FooterIcon";
import microsoftLogo from "../Assets/Logos/microsoft_logo.svg";
import { GITHUB } from "./Icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 50,
      textAlign: "center",
      fontSize: "12px",
      background: "#3c3c41",
      color: "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);


export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={3}
      >
       <Grid item xs={3}>
           {`Daphne Lu @dlu117 Website Created with React & GraphQL`}
           
                </Grid>
                <Grid item xs={2}>
                        {GITHUB.map((icon: FooterIconProps) => {
                            return (                     
                                <FooterIcon key={icon.name} {...icon} />            
                            )
                        })}
                    </Grid>
      </Grid>
    </footer>
  );
}; 