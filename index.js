import express, { application } from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();
import connectDB from "./DB/db.js"

import {testRoute,
    wholesalerIdRoutes,
    turnoverMonthlyRoutes,
    turnoverMaxRoutes,
    singleWholesalerRoutes,} from "./controller/controller.js"


const app = express()
app.use(cors())  // CORS MIDDLEWARES
app.use(express.json());  // JSON BODY PARSER


// EXPRESS ROUTER
const router = express.Router()
app.use('/api', router)


// ROUTES 
router.get('/test', testRoute)

// 1st ROUTE (wholesaler along with a list of retailersassociated)
router.get('/:wholesaler_id', wholesalerIdRoutes);

// 2nd ROUTE (Get a retailer who has single wholesaler)
router.get('/turnover/yearly', turnoverMonthlyRoutes);

// 3rd ROUTE (Total monthly turnover of each wholesaler for a complete year)
router.get('/turnover/max', turnoverMaxRoutes );

// 4th ROUTE ( Max turnover of each wholesaler from a single retailer)
router.get('/single-wholesaler', singleWholesalerRoutes);



// DATABASE CONNECTION
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4040, () => {
      console.log(`SERVER STARTED AT PORT :: ${process.env.PORT} `)
    })
  }).catch( (error)=>{
    console.log(`DB CONNECTION ERROE :: ${error} :: PORT NUMBER ${process.env.PORT} `)
  })




