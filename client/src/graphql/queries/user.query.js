import {gql} from '@apollo/client';

export const Get_Current_User = gql`
  query getCurrentUser {
    currentUser{
      _id
      name
      email
      profilePic
    }
  }
  `;

  export const Get_User_Transactions = gql`
  
  query getUserTransactions($userId: ID!) {
    userById(_id: $userId){
      _id
      name
      profilePic
      transections{
        _id
        amount
        paymentType
        category
        description
        date
        
      }
    }
  }`;

