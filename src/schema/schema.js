import { gql } from 'apollo-server-express';


const typeDefs = gql`

    type Book {
        title: String,
        author: String
    }

    type Auth {
        token: String!
    }

    type User {
        _id: ID!
        username: String
        firstname: String
        lastname: String
        email: String!
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        signup(email:String!, password:String!, firstname:String!, lastname:String!, username:String!): Auth,
        login(email:String!, password:String!): Auth
    }

`;


export default typeDefs;
