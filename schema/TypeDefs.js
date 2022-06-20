const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User{
     userName: String!,
     userAge: Int!,
     married: Boolean!
}

type Book{
    name: String!,
    author: String!,
    url: String!,
    _id: String!
}

type response{
    message: String!,
    code: Int
}

# Queries

type Query {
    getAllUsers: [User],

    getAllBooks: [Book]

}

# Mutations
 type Mutation{
     createUser(userName: String, userAge: Int): response,

     loginUser(userName: String, password: String): response,
 }
`


module.exports = { typeDefs }