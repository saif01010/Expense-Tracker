import {gql} from '@apollo/client';

export const ADD_TRANSACTION = gql`
    mutation addTransection($input: AddTransectionInput!) {
        addTransection(input: $input) {
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


export const UPDATE_TRANSACTION = gql`
    mutation updateTransection($_id: ID!, $input: UpdateTransectionInput!) {
        updateTransection(_id: $_id, input: $input) {
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

export const DELETE_TRANSACTION = gql`
    mutation deleteTransection($_id: ID!) {
        deleteTransection(_id: $_id) {
            _id
        }
    }
`;

