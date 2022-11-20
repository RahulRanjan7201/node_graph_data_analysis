const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Product {
        id:ID, 
        name:String , 
        description: String , 
        price: Float, 
        soldout : SoldOut,
        inventory:Int,
        stores: [Store]!
    }
    enum SoldOut {
        SOLDOUT
        ONSALE
    }
    type Store {
        store: String
    }
    type Query {
        getProducts(id:ID):Product
    }
    input StoreInput {
        store:String
    }
    input ProductInput {
        id:ID, 
        name:String , 
        description: String , 
        price: Float, 
        soldout : SoldOut,
        inventory:Int,
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput) : Product
    }

`);
module.exports = schema;