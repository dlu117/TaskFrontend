import { gql } from "@apollo/client";
import * as fragments from "./fragments";


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
`
