const userTypeDefs = `#graphql
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
    getUsers: [User!]
    authUser: User
    getUser(id: ID!): User!

  }

  type Mutation{
    registerUser(input: registerInput):User!
    loginUser(input: loginInput):User!
    logoutUser:LogoutResponse!

  }

  input registerInput{
    name: String!
    email: String!
    password: String!

  }

  input loginInput{
    email: String!
    password: String!

  }

  type LogoutResponse{
    message: String!
  }
  `;
export { userTypeDefs };
