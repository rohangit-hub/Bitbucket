import mongoose from "mongoose"
import { Retailer } from "../models/retailerModel.js"
import { Stock } from "../models/stockModel.js"
import { Wholesaler } from "../models/wholesalerModel.js"

const testRoute = (req, res) => {
    res.status(200).send({
        "test": "succesfull"
    })
}


// 1st ROUTE (wholesaler along with a list of retailers associated)
const wholesalerIdRoutes = async (req, res) => {
    const { wholesaler_id } = +req.params;
    const result = await Wholesaler.findOne({ "_id": wholesaler_id }).exec();
    res.status(200).json(result);
}



// 2nd ROUTE (Get a retailer who has single wholesaler)
const turnoverMonthlyRoutes = async (req, res) => {
    const result = await Stock.aggregate([
        {
            $group: {
                _id: {
                    wholesaler_id: '$wholesaler_id',
                    month: { $month: '$date' },
                    year: { $year: '$date' },
                },
                total_turnover: { $sum: '$stock_amount' },
            },
        },

        {
            $sort: { '_id.wholesaler_id': 1, '_id.year': 1, '_id.month': 1 },
        },

        {
            $project: {
                _id: 0,
                wholesaler_id: '$_id.wholesaler_id',
                month: '$_id.month',
                year: '$_id.year',
                total_turnover: 1,
            },
        },
    ]);

    res.status(200).json(result);
}



// 3rd ROUTE (Total monthly turnover of each wholesaler for a complete year)
const turnoverMaxRoutes = async (req, res) => {
    const result = await await Stock.aggregate([
        {
            $group: {
                _id: {
                    wholesaler_id: '$wholesaler_id',
                    retailer_id: '$retailer_id',
                },
                total_turnover: { $sum: '$stock_amount' },
            },
        },
        {
            $sort: { total_turnover: -1 },
        },
        {
            $group: {
                _id: '$_id.wholesaler_id',
                retailer_id: { $first: '$_id.retailer_id' },
                maxTurnover: { $first: '$total_turnover' },
            },
        },
    ]);

    res.status(200).json(result);
}



// 4th ROUTE ( Max turnover of each wholesaler from a single retailer)
const singleWholesalerRoutes = async (req, res) => {
    const result = await Retailer.find({ wholesalers: { $size: 1 } }).populate('wholesalers')
    res.status(200).json(result);
}


export {
    testRoute,
    wholesalerIdRoutes,
    turnoverMonthlyRoutes,
    turnoverMaxRoutes,
    singleWholesalerRoutes,

}
