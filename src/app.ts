import express, { Request, Response } from 'express';  // Import express
import tasksRouter from './tasks/tasks.routes';  // Import the albums router
import helmet from 'helmet'; // Import helmet
import cors from 'cors';  // Import cors
import logger from './middleware/logger.middleware';
import dotenv from 'dotenv'; // Import dotenv for environment variables

dotenv.config();    // Load environment variables from a .env file into process.env

const app = express();  // Create an express app
const port = process.env.PORT;  // Set the port to 3000

// Enable all CORS requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

//MySQLConnector.intiializeMySQLConnectior();

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');   // Log the value of the GREETING environment variable
}

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Tasks</h1>');
});
// adding router middleware
app.use('/', [tasksRouter] );   


app.listen(port, () => {    // Start the express server
    console.log(`Example app listening at http://localhost:${port}`)
});






