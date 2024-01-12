const express = require('express'); 
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const connections = require('./config/db-connect');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const routes = require('./routes/index');
app.use('/api', routes);

app.listen(port, (error) =>{ 
    if(!error) 
        console.log(`Server is Successfully Running, and App is listening on port: ${port}`); 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 