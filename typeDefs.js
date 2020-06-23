const { gql } = require('apollo-server');

const typeDefs = gql`
    type School {
        id: ID!
        name: String!
        groups: [Group]!
        teachers: [Teacher]!
        students: [Student]!
    }

    type Group {
        id: ID!
        name: String!
        school: School!
        teachers: [Teacher]!
        students: [Student]!
    }

    type Teacher {
        id: ID!
        username: String!
        firstName: String
        lastName: String
        students: [Student]!
        groups: [Group]!
        schools: [School]!
    }

    type Student {
        id: ID!
        username: String!
        firstName: String
        lastName: String
        teachers: [Teacher]!
        groups: [Group]!
        school: School!
    }

    type Query {
        schools: [School]
        school(id: ID!): School
        groups: [Group]
        group(id: ID!): Group
        teachers: [Teacher]
        teacher(id: ID!): Teacher
        students: [Student]
        student(id: ID!): Student
    }
`;

module.exports = {
    typeDefs
}
