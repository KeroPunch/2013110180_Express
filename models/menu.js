const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    name:  { type: String, required:true,trim:true }, // String is shorthand for {type: String}
    price: { type: Number},
    shop: {type: Schema.Types.ObjectId, ref: 'shop'},
    // createdAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now }
  },{
    toJSON: {virtuals: true},
    timestamps:true,
    collection:"menus" });

menuSchema.virtual('price_vat').get(function(){
    return (this.price*0.07) + this.price;
})

const menu = mongoose.model("Menu",menuSchema)

module.exports = menu