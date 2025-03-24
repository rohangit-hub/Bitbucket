import mongoose from "mongoose"

const retailerSchema = new mongoose.Schema({
  name: String,
  mobile_number: String,
  
  wholesalers: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Wholesaler' }],

},{timestamps:true});

export const Retailer = mongoose.model('Retailer', retailerSchema);
