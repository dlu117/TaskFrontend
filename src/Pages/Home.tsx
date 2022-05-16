import React, { useEffect, useState } from "react";
import { Avatar, Typography, Card, Grid, CardMedia, CardHeader, CardContent} from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


import "./Home.css";



//graph ql query
const Tasks = gql`
  query GetDocuments {
    documents{
      nodes{
        name
        description
        person{
          name
          id
        }
      }
    } 
    }
`;

export const HomePage = () => {
    const {loading, error, data} = useQuery(Tasks)
    
    // why does loading and error have to return something
    if (loading)  {
      return <div> <Typography variant="h5">Loading Please wait, Refresh If It Takes Too Long</Typography></div>};

    if (error)  {
      return <div> <Typography variant="h5">Connection Error Try Again Later</Typography></div>};
     
    console.log(data);
    
    const handledelete = (id:any) =>{
     console.log(id)
    }
    
  
    return(<div> <Grid className = "display" container 
      spacing ={2} 
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      > {data.documents.nodes.map((d:any) => (
      
     
      <Grid className = "card" item xs={3} key = {d.person.id}>
      <Card >
        
        <CardHeader
        title={d.name}
        subheader="To do task"
         
        avatar={
          <Avatar>
            {d.person.name[0]}
          </Avatar>
        }
        action = {<HighlightOffIcon color="action" onClick={()=>handledelete(d.person.id)}></HighlightOffIcon>}
        >
          
          </CardHeader>     
            <CardContent >{d.description}</CardContent>
      </Card>
      
      </Grid>
  
  
  ))}
    </Grid>
  </div>
  )
};

