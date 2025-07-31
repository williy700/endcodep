const express = require ("express")
const dotenv = require ("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require("./Routes/TaskRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const connectDB = require("./Routes/config/db");
const colors = require("colors")
//import express from "express"

const app = express();
app.use(cors());
connectDB()
const Port = process.env.PORT;
const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use("/Task", taskRoutes)
app.use("/api/user", UserRoutes);



app.listen(Port, () => console.log(`server running on port ${Port}`));