import React, { useEffect, useState } from "react";
import { Avatar, Typography, Card, Grid, CardMedia, CardHeader, CardContent, Button, DialogContent, Box} from "@material-ui/core";
import { gql, useQuery, useMutation } from "@apollo/client";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Header from '../Components/Header';


import "./Styling/Home.css";

const Tasks = gql`
  query GetDocuments {
    documents{
      nodes{
        name
        description
        id
        person{
          name
          id
        }
      }
    } 
    }
`;

const deleteTasks = gql`
  mutation DeleteTask(
    $documentId: String!
    ){
    deleteDocument(input:{documentId:$documentId}){
      id
      name
    } 
    }
`;

export const HomePage = () => {
    const {loading, error, data} = useQuery(Tasks)
    const [DeleteTask] = useMutation(deleteTasks);
    const[deleteStatus,setdeleteStatus] = useState<boolean>(false);
    const[deleteid,setdeleteid] = useState<string>("");
    

    // why does loading and error have to return something
    if (loading)  {
      return <div> <Typography variant="h5">Loading Please wait, Refresh If It Takes Too Long...</Typography></div>};

    if (error)  {
      return <div> <Typography variant="h5">Connection Error Please Refresh!</Typography></div>};
    
    console.log(data);

    if(!error && !loading){
    }
    const handledelete = () =>{
     console.log(deleteid);
     DeleteTask({variables:{"documentId":deleteid}});
     setdeleteStatus(false);
     window.location.reload();
    }
    
    const opendelete =(id:any) =>{
      setdeleteStatus(true);
      setdeleteid(id);
      console.log(id);
  
    }

    const canceldelete =() =>{
      setdeleteStatus(false);
    }
  
    return(<div> 
      <Header/>
      <Grid className = "display" container 
      spacing ={2} 
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      > {data.documents.nodes.map((d:any) => (

      <Grid className = "card" item xs={12} sm={3} key = {d.id}>
        
        <Card >
          <CardHeader
          title={d.name}
          subheader="To do task"

          avatar={
          <Avatar>
            {d.person.name[0]}
          </Avatar>
          }
          action = {<Button><HighlightOffIcon color="action" onClick={()=>opendelete(d.id)}></HighlightOffIcon></Button>}
        >
          
         </CardHeader>     
         <CardContent >{d.description}</CardContent>
       </Card>
       <br></br>
      </Grid>
      ))}
    </Grid>
  <Grid>
  <Dialog open = {deleteStatus} onClose={canceldelete}>
  <DialogTitle> Are you sure you want to delete task?</DialogTitle>
  
  <DialogContent>
    <Box textAlign='center'>
    <Button onClick = {handledelete} ><Typography>YES</Typography></Button>
    
    <Button onClick = {canceldelete}><Typography>NO</Typography></Button>
    </Box>
  </DialogContent>
  
  </Dialog>
  </Grid>
  </div>
  )
};

