import {gql} from '@apollo/client';

export const GET_Current_USER = gql`
  query getCurrentUser {
    currentUser{
      _id
      name
      email
    }
  }
  `;

