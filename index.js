const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();
const schema = require('./data/schema')
const resolvers = require('./data/resolvers')
app.get('/', (req, res) => {
    res.send('graphql is awesome')
})

const root = resolvers;
app.use('/graphql', graphqlHTTP(
    {
        schema,
        rootValue: root,
        graphiql: true
    }
))
app.listen(8080, () => console.log('Running server on local host 8080'))