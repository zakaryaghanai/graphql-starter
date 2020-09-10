'use strict'
const graphql = require('graphql');
const {GraphQLString, GraphQLList} = graphql
const {articleType} = require('../types/index')
const _ = require('lodash');
const articles = [
    {id: "1", title: 'hello world article', body: 'hello world article body', userId: "1"},
    {id: "2", title: 'article 2', body: 'article 2 body', userId: "1"},
    {id: "4", title: 'article 4', body: 'article 4 body', userId: "2"},
    {id: "3", title: 'article 3', body: 'article 3 body', userId: "1"},
]

const articleQuery = {
    type: articleType,
    args: {id: {type: GraphQLString}},
    resolve(parent, args) {
        return _.find(articles, {id: args.id});
    }
}
const articlesQuery = {
    type: GraphQLList(articleType),
    resolve(parent, args) {
        return articles;
    }
}



// assigne query fields for article
const articleQueries = {
    article: articleQuery,
    articles: articlesQuery
}

module.exports = articleQueries