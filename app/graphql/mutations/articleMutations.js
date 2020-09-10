'use strict'
const graphql = require('graphql');
const {GraphQLString, GraphQLNonNull} = graphql;

const {articleType} = require('../types')

const addArticle = {
    type: articleType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        body: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve(parent, args, req, res) {
        return {
            title: args.title,
            body: args.body,
        };
    }
}


const articleMutations = {
    addArticle
}

module.exports = articleMutations

