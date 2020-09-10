'use strict'
const objectTypeGenerator = require('../helpers/objectTypeGenerator')
const types = {}

// importing types configs
const {articleTypeConfig} = require('./articleTypeConfig')
const {userTypeConfig} = require('./userTypeConfig')

/* generate types */
const userType = new objectTypeGenerator(userTypeConfig(types));
const articleType = new objectTypeGenerator(articleTypeConfig(types));

// store the generated types
types.userType = userType;
types.articleType = articleType;

// exporting types
module.exports = {
    userType,
    articleType,
}