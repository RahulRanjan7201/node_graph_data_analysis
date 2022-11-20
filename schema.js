const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Product {
        id:ID, 
        name:String , 
        description: String , 
        price: Float, 
        soldout : Boolean
        stores: [Store]!
    }
    type Store {
        store: String
    }
    type Query {
        product:Product
    }

`);
module.exports = schema;