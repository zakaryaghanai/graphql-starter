const graphql = require('graphql')
const {GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull} = graphql
const _ = require('lodash');


const users = [
    {id: "1", name: 'zakarya ghanai', age: '22'},
    {id: "2", name: 'john doe', age: '30'},
]
const articles = [
    {id: "1", title: 'hello world article', body: 'hello world article body', userId: "1"},
    {id: "2", title: 'article 2', body: 'article 2 body', userId: "1"},
    {id: "4", title: 'article 4', body: 'article 4 body', userId: "2"},
    {id: "3", title: 'article 3', body: 'article 3 body', userId: "1"},
]


const userTypeConfig = (types) => {
    return {
        name: 'user',
        fields: () => ({
            id: {type: GraphQLString,},
            name: {type: GraphQLString},
            age: {type: GraphQLString},
            articles: {
                type: GraphQLList(types.articleType),
                resolve(parent, args) {
                    return _.filter(articles, {userId: parent.id});
                }
            },
            article: {
                type: types.articleType,
                args: {id: {type: GraphQLString}},
                resolve(parent, args) {
                    return _.find(articles, {id: args.id, userId: parent.id})
                }
            },
            articlesCount: {
                type: GraphQLString,
                resolve(parent, args) {
                    return (_.filter(articles, {userId: parent.id})).length;
                }
            },
        }),
    }
}
module.exports = {
    userTypeConfig
}