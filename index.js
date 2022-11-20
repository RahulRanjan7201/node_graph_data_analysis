const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();
const schema = require('./schema')
app.get('/', (req, res) => {
    res.send('graphql is awesome')
})
class Product {
    constructor(id, name, description, price, soldout, stores){
        this.id= id;
        this.name = name; 
        this.description = description;
        this.price = price;
        this.soldout = soldout; 
        this. stores = stores;
    }
}
const productDatabase = {};
const root = {
    product: () => {
        return {
            "id": 287,
            name: "product Name",
            description: "Product Des",
            price: 34.99,
            soldout: false,
            stores: [
                {
                    store: "ABC"
                },
                {
                    store:"XYZ"
                }
            ]
        }
    }
}
app.use('/graphql', graphqlHTTP(
    {
        schema,
        rootValue: root,
        graphiql: true
    }
))
app.listen(8080, () => console.log('Running server on local host 8080'))