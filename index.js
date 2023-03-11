'use strict'
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('./app/graphql/schema')


const app = express();

app.use('/api/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use('/api', (req, res) => {
    res.send('Hey this is my API running 🥳')
});



// Server Port
const port = process.env.PORT || 5000;
app.set('port', port);

// Listen for server
app.listen(port, () => {
    console.log(`server starting on localhost:${port}`)
});