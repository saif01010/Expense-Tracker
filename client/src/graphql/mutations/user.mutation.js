import {gql} from '@apollo/client';


export const SIGN_UP = gql`
    mutation signUp($input: SignUpInput!) {
        signUp(input: $input){
            _id
            name
            email
            profilePic
            gender
        }
    }
`;

export const SIGN_IN = gql`
    mutation signIn($input: SignInInput!) {
        signIn(input: $input){
            _id
            name
            email
            profilePic
        }
    }
`;

export const LogOut = gql`
    mutation logOut {
        logOut{
            message
        }
    }
`;