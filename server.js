const express = require('express');
const dotenv = require('dotenv'); 
const morgan = require('morgan');
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

//load env vars 
dotenv.config({ path: './config/config.env'});

//connect to database 
connectDB();

// Routes Files
const visitors = require('./routes/visitor');


const app = express();

//Boy Parser 
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//Mount Routers

app.use('/api/v1/visitors', visitors);

app.use(errorHandler);
const PORT = process.env.PORT || 6000;
const server =  app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // close Server & exit Process

    server.close(() => process.exit(1));
})