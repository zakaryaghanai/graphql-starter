'use strict'
const grapql = require('graphql');
const { GraphQLString, GraphQLNonNull, GraphQLInt } = grapql;

const { userType } = require('../types')

const createUser = {
    type: userType,
    args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLString},
        // lastname: {type: GraphQLNonNull(GraphQLString)},
        // password: {type: GraphQLNonNull(GraphQLString)},
        // password_check: {type: GraphQLNonNull(GraphQLString)},
    },
    resolve(parent, args) {
        return {
            name: args.name,
            age: args.age,
            // lastname: args.lastname,
            // password: null,
        }
    }
}

const userMutations = {
    createUser
}

module.exports = userMutations;