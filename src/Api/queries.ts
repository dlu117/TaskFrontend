import { gql } from "@apollo/client";
import * as fragments from "./fragments";


export const TASKS = gql`
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
