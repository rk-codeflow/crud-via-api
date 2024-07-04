import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query {
    user(id: 10) {
      name
      username
      email
      phone
    }
  }
`;
