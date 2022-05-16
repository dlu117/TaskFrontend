import React from "react";
import { IconButton } from "@material-ui/core";

// defines syntax that any entity must adhere to

export interface FooterIconProps{
    name:string;
    url:string;
    logo:string;
}

// Function Component provides an implicit definition of children
// FooterIcon will be of type React Functional Component takes props of type FooterIconProps

export const FooterIcon: React.FC<FooterIconProps> = ({ name, url, logo }) => {
    return (
      <IconButton href={url}>
        <img src={logo} id={logo} height="20px" alt={name} />
      </IconButton>
    );
  };