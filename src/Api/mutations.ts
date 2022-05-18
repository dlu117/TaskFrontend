import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const ADDPERSONS = gql`
  mutation AddPersons(
    $name: String!,
    $title:String!,
    $imageURI:String!
    ){
    addPerson(input:{name:$name,title:$title,imageURI:$imageURI}){
      ...personFields
    } 
    }
    ${fragments.PERSON}
`

export const ADDTASKS = gql`
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
      ...documentFields
    } 
    }
    ${fragments.DOCUMENT}
`

export const DELETETASKS = gql`
  mutation DeleteTask(
    $documentId: String!
    ){
    deleteDocument(input:{documentId:$documentId}){
        ...documentFields
      
    } 
    }
    ${fragments.DOCUMENT}
`
