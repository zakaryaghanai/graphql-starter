'use strict'
const graphql = require('graphql');
const {GraphQLObjectType, GraphQLSchema} = graphql;

// improting Queries
const articleQueries = require('../queries/articleQuery')
const userQueries = require('../queries/userQuery')

// importing mutations
const articleMutations = require('../mutations/articleMutations')
const userMutations = require('../mutations/userMutations');
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...articleQueries,
        ...userQueries
    },
})

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        ...articleMutations,
        ...userMutations
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})