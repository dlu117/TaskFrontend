import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, CardHeader, Container, DialogContent, Grid, TextField, Typography } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Header from '../Components/Header';
import { ADDTASKS ,ADDPERSONS } from '../Api/mutations';

import "./Styling/Add.css";


export const SubmitPage = () => {
  const [addPerson, { data, loading, error }] = useMutation(ADDPERSONS);
  const [addTask] = useMutation(ADDTASKS);
  const [Name, setName] = useState<string>("");
  const[Task,setTask] = useState<string>("");
  const[Description,setDescription] = useState<string>("");
  const[Post, setPost] = useState<boolean>(false);
  const[Message, setMessage] = useState<boolean>(false);
  
  if (loading) console.log("loading");
  if (error) console.log("error");




/*
 if (data ==== "undefined"){
 }
 else:  addTask({ variables: { 
      "personId": data.addPerson.id,
      "description":task,
      "name":"",
      "link":"",
      "year": "DATE_2022"
       } })
      }}
  // continusly fire because addTask is a state thus this if statement will always execute???
  // console.log() prints only once 
*/

useEffect(() => {
  if (data) {
    addTask({ variables: { 
      "personId": data.addPerson.id,
      "description":Description,
      "name":Task,
      "link":"",
      "year": "DATE_2022"
       } })
  }
}, [data]);  //what is data???  usemutation hook function call state change ???
  
const handlePost = async() => {
  setPost(false);

  if (Name !== "" && Task !== ""){
    
    try{  
      await addPerson({ variables: {  
        "name":Name,
        "title":"",
        "imageURI":"" } })
      ;
      setPost(true);
      setTask("");
      setName("");
      setDescription("");
      
    // console.log(data) data here is always undefined because
    // data is asynchronous data hasnt loaded when exceute this line
    // since this function will reload will state is changed data is loaded outside the function
    }
    catch(e){
      console.log(e)
    }
  }
  else{
    console.log();
  }
  setMessage(true);
};

const readMessage = ()=>{
  setMessage(false);
};

  return(<div>
         <Header/>
         
         <Grid container className = "postForm"
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }} >
         <Grid xs ={9} md = {5} >
          <Card>
          <CardHeader title ="Add New Task" />
          <CardContent>
          <br/>        
          <TextField  label = "Name" helperText="Required Field" value ={Name} onChange={e => setName(e.target.value)}/>
          <br/>
          <br/>
          <TextField label = "Task" helperText="Required Field" value ={Task} onChange={e => setTask(e.target.value)}/>
          <br/>
          <br/>
          <TextField multiline label = "Description" rows = {4} value = {Description} onChange={e => setDescription(e.target.value)} />
          <br/>
          <br/>
          <Button variant="contained" onClick ={handlePost}>Post</Button> 
          <br/>
          <br/>
          </CardContent>
          </Card>
          </Grid>
          </Grid>
          <Dialog open={Message} onClose={readMessage}>
          
          {
            Post?
            <DialogTitle>Task has been posted !</DialogTitle> :  <DialogTitle>Error! Please fill all required fields!</DialogTitle>
          }
          <DialogContent>
          <Box textAlign='center'>
          <Button variant="contained" onClick = {readMessage} ><Typography>Ok</Typography></Button>
          </Box>
          <br/>
          </DialogContent>
          
          </Dialog>
          </div> 
)};   