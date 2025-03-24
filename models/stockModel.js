import mongoose from "mongoose"

const stockSchema = new mongoose.Schema({
  retailer_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Retailer' },

  wholesaler_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Wholesaler' },
    
  stock_amount: Number,
  date: Date,
},{timestamps:true});

export const Stock = mongoose.model('Stock', stockSchema);
