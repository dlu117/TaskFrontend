import { gql } from "@apollo/client";
import * as fragments from "./fragments";

const Persons = gql`
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
      ...documentFields
    } 
    }
    ${fragments.DOCUMENT}
`

const deleteTasks = gql`
  mutation DeleteTask(
    $documentId: String!
    ){
    deleteDocument(input:{documentId:$documentId}){
        ...documentFields
      
    } 
    }
    ${fragments.DOCUMENT}
`
