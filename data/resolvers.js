
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
    getAllProducts:() => {
        return new Promise((resolve, reject) => {
            Widgets.find({}, (err, widgets) => {
                if(err) reject(err);
                else resolve(widgets)
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
    },
    updateProduct: ({input}) => {
        return new Promise((resolve, reject) => {
            Widgets.findOneAndUpdate({_id:input.id}, input , {new: true}, (err, widget) => {
                if(err) reject(err);
                else resolve(widget)
            })
        })
    },
    deleteProduct: ({id}) => {
        return new Promise((resolve,reject) => {
            Widgets.remove({_id:id}, (err) => {
                if(err) reject(err);
                else resolve("Successfully deleted")
            })
        })
    }
}

module.exports = resolvers;