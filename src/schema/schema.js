import { gql } from 'apollo-server-express';


const typeDefs = gql`
    type Auth {
        token: String!
    }
    type Status {
        message: String!
    }
    type User {
        _id: ID!
        username: String
        firstName: String
        lastName: String
        email: String!
    }

    type Coordinates {
        coordinates: [String]
    }
    type Me {
        _id: ID!
        username: String
        email: String!
        firstName:String
        lastName:String
        avator:String
    }
    type Location {
        name: String
        category: String
        _id: ID
        location: Coordinates
    }

    type Friend {
        friend: User,
        _id: ID
        userId:ID
    }
    type Query {
        me: Me,
        friends(_id: ID!): [Friend],
    }
    type Mutation {
        signup(email:String!, password:String!, firstName:String!, lastName:String!, username:String!): Auth,
        login(email:String!, password:String!): Auth,
        createChat(currentUserId: ID!, otherUserId: ID!): Status,
        shareLocation(name: String! ,category:String!,lat:String!,lon:String!):Status
    }

`;

// findNearBy(lat:String!,lon:String!): [Location]
export default typeDefs;
