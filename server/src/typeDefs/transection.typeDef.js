const transectionTypeDef = `#graphql 
type Transection{
    id: ID!
    amount: Float!
    type: String!
    category: String!
    note: String
    createdAt: String!
    updatedAt: String!
}

type Query{
    transections: [Transection!]!
    transectionById(id: ID!): Transection!
}

type Mutation{
    addTransection(input: AddTransectionInput!): Transection!
    updateTransection(id: ID!, input: UpdateTransectionInput!): Transection!
    deleteTransection(id: ID!): Transection!
}

input AddTransectionInput{
    amount: Float!
    type: String!
    category: String!
    note: String
}

input UpdateTransectionInput{
    amount: Float
    type: String
    category: String
    note: String
}

type deleteTransection{
    message: String!
}
`

export { transectionTypeDef }