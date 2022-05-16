import React, { useEffect, useState } from "react";
import { Button, Card, Container, Grid, TextField, Typography } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";

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
  const[task,setTask] = useState<string>("");
  
  if (loading) console.log("loading");
  if (error) console.log("error");
  ///console.log(data)


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
      "description":task,
      "name":"",
      "link":"",
      "year": "DATE_2022"
       } })
  }
}, [data]);  //what is data???  usemutation hook fucntion call state change ???
  
const handleSubmit = async() => {
    try{  
      await addPerson({ variables: {  
        "name":Name,
        "title":"",
        "imageURI":"" } })
      ;
    // console.log(data) data here is always undefined 
    // data is asynchronous data hasnt loaded when exceute this line
    // since this function will reload will state is changed data is loaded outside the function
    }
    catch(e){console.log(e)}
    
  };

  return( <Container className = "submit-form">
          <Typography variant="h4">Submit Page</Typography>
          <Card>
          <br/>
          <Grid>
          Name
          <TextField label = "required" value ={Name} onChange={e => setName(e.target.value)}/>
         
          </Grid>
          
          <br/>
          <br/>
          Task
          <TextField multiline label = "Multiline" rows = {4} value = {task} onChange={e => setTask(e.target.value)} />
          <Button onClick ={handleSubmit}>submit</Button> 
          nom
          <br/>
          <br/>
          </Card>
          </Container>
)};   