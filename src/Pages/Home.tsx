import React from "react";
import { Typography, Card} from "@material-ui/core";
import { gql, useMutation, useQuery } from "@apollo/client";


//graph ql query
const Projects = gql`
  query GetPersons {
    persons{
      nodes{
        name
      }
    } 
    }
`;


export const HomePage = () => {
    const {loading, error, data} = useQuery(Projects)

    // why does loading and error noth have to return something
    if (loading)  {
      return <div/>};

    if (error)  {
      return <div> <Typography variant="h5">Connection Error Try Again Later</Typography></div>};
     
    console.log(data);
    
  return(  <div> {data.persons.nodes.map((person:any) => (
    <Card>{person.name}</Card> 
  ))}
  </div>
  )
};

