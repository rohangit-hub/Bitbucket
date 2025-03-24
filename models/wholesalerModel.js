import mongoose from "mongoose"

const wholesalerSchema = new mongoose.Schema({
  name: String,
  mobile_number: String,
},{timestamps:true});

export const Wholesaler = mongoose.model('Wholesaler', wholesalerSchema);
