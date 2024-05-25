const express = require('express');
const app = express();
const connectToDb = require('./db');
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT;

const corsOptions = {
    origin: process.env.ORIGIN,
    methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
    credentials: true
};
app.use(cors(corsOptions));


const startServer = async () => {
    try {
        app.use(express.json());

        //app routes
        app.use('/api/auth', require('./routes/auth.js'));
        app.use('/api/service', require('./routes/service.js'));
        app.use('/api/admin', require('./routes/dashboardRoutes.js'));





        //health route
        app.get("/health", (req, res) => {
            res.json("health is running ok");
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

const initializeApp = async () => {
    await connectToDb();
    await startServer();
};


initializeApp();
