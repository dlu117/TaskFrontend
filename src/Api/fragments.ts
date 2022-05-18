import { gql } from "@apollo/client";

export const PERSON = gql`
    fragment personFields on Person {
        id
        name
        imageURI
    }
`;

export const DOCUMENT = gql`
    fragment documentFields on Document {
        id
        name
        description
        link
        date
        modified
        created
    }
`;

