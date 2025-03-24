# Sales Admin Panel

This project is a backend application for managing sales data, including retailers, wholesalers, and stock information. It provides APIs for various operations such as fetching associated retailers, calculating turnovers, and more.

## Features
- Manage retailers and wholesalers.
- Calculate monthly and maximum turnovers.
- RESTful API endpoints for data retrieval.

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- `.env` file with required environment variables.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sales-admin-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=4040
   DATABASE_ATLAS=<your-mongodb-connection-string>
   ```

4. Start the server:
   - Development mode:
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

## API Endpoints

### 1. Test Route
**GET** `/api/test`  
- **Description**: Test the API connection.
- **Response**:
  ```json
  {
    "test": "successful"
  }
  ```

---

### 2. Get Wholesaler with Associated Retailers
**GET** `/api/wholesaler/:wholesaler_id`  
- **Description**: Fetch a wholesaler along with a list of associated retailers.
- **Parameters**:
  - `wholesaler_id` (path): ID of the wholesaler.
- **Response**:
  ```json
  {
    "_id": "wholesaler_id",
    "name": "Wholesaler Name",
    "mobile_number": "1234567890",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "__v": 0
  }
  ```
---

### 3. Get Retailers with a Single Wholesaler
**GET** `/api/singleWholesaler`  
- **Description**: Fetch retailers who are associated with exactly one wholesaler.
- **Response**:
  ```json
  [
    {
      "_id": "retailer_id",
      "name": "Retailer Name",
      "mobile_number": "1234567890",
      "wholesalers": ["wholesaler_id"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "__v": 0
    }
  ]
  ```

---

### 4. Get Monthly Turnover of Wholesalers
**GET** `/api/turnoverMonthly`  
- **Description**: Fetch the total monthly turnover of each wholesaler for a complete year.
- **Response**:
  ```json
  [
    {
      "wholesaler_id": "wholesaler_id",
      "month": 1,
      "year": 2023,
      "total_turnover": 1000
    }
  ]
  ```

---

### 5. Get Maximum Turnover of Wholesalers from a Single Retailer
**GET** `/api/turnoverMax`  
- **Description**: Fetch the maximum turnover of each wholesaler from a single retailer.
- **Response**:
  ```json
  [
    {
      "_id": "wholesaler_id",
      "retailer_id": "retailer_id",
      "maxTurnover": 5000
    }
  ]
  ```

---

## SAMPLE DATA FOR THE TESTING..
```
Please load this data t you database for sample test

files.....
    retailers.json
    stocks.json
    wholesalers.json
    
```

## Project Structure
```
sales-admin-panel/
├── controller/
│   └── controller.js       # API route handlers
├── DB/
│   └── db.js               # Database connection
├── models/
│   ├── retailerModel.js    # Retailer schema
│   ├── stockModel.js       # Stock schema
│   └── wholesalerModel.js  # Wholesaler schema
├── .gitignore              # Ignored files
├── index.js                # Entry point
├── package.json            # Project metadata
└── README.md               # Documentation
```

## Environment Variables
| Variable         | Description                          | Example                     |
|------------------|--------------------------------------|-----------------------------|
| `PORT`           | Port number for the server          | `4040`                      |
| `DATABASE_ATLAS` | MongoDB connection string           | `mongodb+srv://...`         |

## Dependencies
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **dotenv**: Load environment variables from `.env`.
- **cors**: Enable Cross-Origin Resource Sharing.
- **nodemon**: Development utility for auto-restarting the server.

## License
This project is licensed under the ISC License.

## Author
- **Name**: ROHAN TIWARI
- **Email**: rohan71189131@gmail.com
- **mobile**: 7052888223

