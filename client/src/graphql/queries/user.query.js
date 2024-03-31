import {gql} from '@apollo/client';

export const GET_Current_USER = gql`
  query getCurrentUser($id: ID!) {
    currentUser{
      _id
      name
      email
      profilePic
    }
  }
  `;

export const getUserAndTransections = gql`
  query getUserandTransections($id: ID!) {
    userById(_id: $id){
      _id
      name
      email
      profilePic
      transections{
        _id
        amount
        paymentType
        description
        category
      }
    }
  }`;