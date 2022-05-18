import React, { useEffect, useState } from "react";
import { Box, Button, Card, Container, DialogContent, Grid, TextField, Typography } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Header from '../Components/Header';



//graph ql query
const Persons = gql`
  mutation AddPersons(
    $name: String!,
    $title:String!,
    $imageURI:String!
    ){
    addPerson(input:{name:$name,title:$title,imageURI:$imageURI}){
      id
    } 
    }
`;

const Tasks = gql`
  mutation AddDocuments(
    $personId: String!,
    $description:String!
    $name:String!,
    $link:String!,
    $year:String!
    ){

    addDocument(input:{
      personId:$personId,
      description:$description
      name:$name,
      link:$link,
      year:$year
    }){
      id
      name
      description
      link
    } 
    }
`;

export const SubmitPage = () => {
  const [addPerson, { data, loading, error }] = useMutation(Persons);
  const [addTask] = useMutation(Tasks);
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
}, [data]);  //what is data???  usemutation hook fucntion call state change ???
  
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
      
    // console.log(data) data here is always undefined 
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
         
         <Container className = "post-form">
         
          <Card>
          <br/>
          <Grid>
          <Typography>Name</Typography>
        
          <TextField  label = "required" value ={Name} onChange={e => setName(e.target.value)}/>
          <Typography>Task</Typography>
        
          <TextField label = "required" value ={Task} onChange={e => setTask(e.target.value)}/>
         
          <br/>
          <br/>
          <Typography>Description</Typography>
          <TextField multiline label = "Multiline" rows = {4} value = {Description} onChange={e => setDescription(e.target.value)} />
          <br/>
          <br/>
          <Button variant="contained" onClick ={handlePost}>Post</Button> 
          <br/>
          <br/>
          </Grid>
          </Card>
          </Container>
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