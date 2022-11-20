const mongoose = require('mongoose');
// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/widgets', {

})
const widgetSchema = new  mongoose.Schema( {
name: {
    type:String
},
description: {
    type: String
},
price: {
    type:Number
},
soldout: {
    type: String
},
stores: {
  type: Array
},
inventory:{
    type: Number
}   

})

const Widgets = mongoose.model(widgetSchema)
module.exports= {Widgets}