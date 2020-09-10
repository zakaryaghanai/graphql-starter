const graphql = require('graphql')
const {GraphQLString, GraphQLList} = graphql
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

const articleTypeConfig = (types) => {
    return {
        name: 'article',
        fields: () => ({
            id: {type: GraphQLString},
            title: {type: GraphQLString},
            body: {type: GraphQLString},
            user: {
                type: types.userType,
                resolve(parent, args) {
                    return _.find(users, {id: parent.userId})
                }
            }
        })
    }
}

module.exports = {
    articleTypeConfig,
}