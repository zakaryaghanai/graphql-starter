'use strict'
const graphql = require('graphql')
const {GraphQLString, GraphQLList} = graphql
const _ = require('lodash');

const {userType} = require('../types/index');

const users = [
    {id: "1", name: 'zakarya ghanai', age: '22'},
    {id: "2", name: 'john doe', age: '30'},
]

const userQuery = {
    type: userType,
    args: {id: {type: GraphQLString}},
    resolve(parent, args) {
        return _.find(users, {id: args.id});
    }
}

const usersQuery = {
    type: GraphQLList(userType),
    resolve(parent, args) {
        return users;
    }
}



// assigne query fields for user
const userQueries = {
    user: userQuery,
    users: usersQuery
}
module.exports = userQueries