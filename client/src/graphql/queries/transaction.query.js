import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
    query getTransactions {
        getAllTransections {
            _id
            amount
            category
            paymentType
            description
            date
            location
        }
    }
`;

export const getTransactionsById = gql`
    query getTransactionById($_id: ID!) {
        transectionById(_id: $_id) {
            _id
            amount
            category
            paymentType
            description
            date
            location
        }
    }
`;

export const Get_Catagory_Stats = gql`
    query getCatagoryStats {
        catagagroryStats {
            _id
            category
            total
        }
    }
`;

