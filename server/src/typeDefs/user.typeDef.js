const userTypeDef = `#graphql
type User{
    id: ID!
    name: String!
    email: String!
    password: String!
    gender: String!
    createdAt: String!
    updatedAt: String!

}

type Query{
    users: [User!]!
    user(id: ID!): User!

}

type Mutation{
    signUp(input: SignUpInput!): User!
    signIn(input: SignInInput!): User!
    logOut: LogoutMessage!
}

input SignUpInput{
    name: String!
    email: String!
    password: String!
}

input SignInInput{
    email: String!
    password: String!
}

type LogoutMessage{
    message: String!
}
`

export { userTypeDef}