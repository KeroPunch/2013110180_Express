const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name:  { type: String, required:true,trim:true }, // String is shorthand for {type: String}
    price: { type: Number},
    shop: {type: Schema.Types.ObjectId, ref: 'Shop'},
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now }
  },{
    timestamps:true,
    collection:"menus" });

  const menu = mongoose.model("Menu",menuSchema)

  module.exports = menu