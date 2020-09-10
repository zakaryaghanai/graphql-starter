const graphql = require('graphql');
const {GraphQLObjectType} = graphql

class objectTypeGenerator extends GraphQLObjectType{
    constructor(config) {
        super(config);
    }
}
module.exports = objectTypeGenerator;