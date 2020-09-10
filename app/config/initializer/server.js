'use strict'
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('../../graphql/schema')


const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


// Server Port
const port = process.env.PORT || 5000;
app.set('port', port);

// Listen for server
app.listen(port, () => {
    console.log(`server starting on localhost:${port}`)
});