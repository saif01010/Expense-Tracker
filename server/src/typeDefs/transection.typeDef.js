const transectionTypeDef = `#graphql 
type Transection{
    _id: ID!
    userId: ID!
    amount: Float!
    paymentType: String!
    category: String!
    description: String
    user: User!
    createdAt: String!
    updatedAt: String!
}

type Query{
    getAllTransections: [Transection!]!
    transectionById(_id: ID!): Transection!
}

type Mutation{
    addTransection(input: AddTransectionInput!): Transection!
    updateTransection(_id: ID!, input: UpdateTransectionInput!): Transection!
    deleteTransection(_id: ID!): Transection!
}

input AddTransectionInput{
    amount: Float!
    type: String!
    category: String!
    note: String
}

input UpdateTransectionInput{
    _id: ID!
    amount: Float
    type: String
    category: String
    note: String
}


`

export { transectionTypeDef }