const mongoose = require('mongoose');
const {Sequelize, DataTypes}= require('sequelize')
const _ = require('lodash')
const causal = require('casual')
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

const Widgets = mongoose.model('widgetSchema',widgetSchema)
const sequelize = new Sequelize('sqlite::memory:')
const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING
})
Categories.sync({force:true}).then(() => {
    _.times(5,(i)=> {
        Categories.create({
            category: causal.word,
            description: causal.sentence
        });
    } )
})
module.exports= {Widgets, Categories}