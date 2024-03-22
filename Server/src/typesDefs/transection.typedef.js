const transectionTypeDef = `#graphql
  type Transection{
    id: ID!
    amount: Float!
    category: String!
    type: String!
    note: String!
    createdAt: String!
    updatedAt: String!
  }
  type Query{
    getTransections: [Transection!]
    getTransection(id: ID!): Transection!
  }
  type Mutation{
    addTransection(input: addTransectionInput):Transection!
  }
  input addTransectionInput{
    amount: Float!
    category: String!
    type: String!
    note: String!

  }
  `;
