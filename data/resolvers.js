
const {Widgets} = require('./dbConnectors')
 const resolvers = {
    getProducts: ({id}) => {
        return new Promise((resolve, reject) => {
            Widgets.findById({_id:id}, (err, product) => {
                if(err) reject(err)
                else resolve(product)
            })
            
        })
    },
    createProduct : ({input}) => {
        const newWidget= new Widgets({
            name:input.name,
            description:input.description,
            price:input.price,
            soldout:input.soldout,
            inventory:input.inventory,
            stores:input.stores
        });
        newWidget.id = newWidget._id;
        return new Promise((resolve, reject) => {
            newWidget.save(err => {
                if(err) reject(err)
                else resolve(newWidget)
            })
        })
    }
}

module.exports = resolvers;