const { gql } = require('apollo-server');

const typeDefs = gql`
    type School {
        id: ID!
        name: String!
        groups(name: String): [Group]!
        teachers(username: String, firstName: String, lastName: String): [Teacher]!
        students(username: String, firstName: String, lastName: String): [Student]!
    }

    type Group {
        id: ID!
        name: String!
        school: School!
        teachers(username: String, firstName: String, lastName: String): [Teacher]!
        students(username: String, firstName: String, lastName: String): [Student]!
    }

    type Teacher {
        id: ID!
        username: String!
        firstName: String
        lastName: String
        students(username: String, firstName: String, lastName: String): [Student]!
        groups(name: String): [Group]!
        schools(name: String): [School]!
    }

    type Student {
        id: ID!
        username: String!
        firstName: String
        lastName: String
        teachers(username: String, firstName: String, lastName: String): [Teacher]!
        groups(name: String): [Group]!
        school: School!
    }

    type Query {
        schools(name: String): [School]
        school(id: ID!): School
        groups(name: String): [Group]
        group(id: ID!): Group
        teachers(username: String, firstName: String, lastName: String): [Teacher]
        teacher(id: ID!): Teacher
        students(username: String, firstName: String, lastName: String): [Student]
        student(id: ID!): Student
    }
`;

module.exports = {
    typeDefs
}
