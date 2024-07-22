import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query {
    users {
      data {
        id
        name
        username
        email
      }
    }
  }
`;
