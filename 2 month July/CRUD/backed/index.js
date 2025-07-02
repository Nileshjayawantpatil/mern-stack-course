// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectMongoDB = require("./config/db");
const Student = require("./models/studentModel");
const { CreateStudent, getAllStudent } = require("./Controller/students");
const cors = require("cors")

// Create an Express application
const app = express();



app.use(cors())

// Port where the server will run


app.listen(8080,() => {
  console.log("hello node api");
});
// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// connect mongoDB

connectMongoDB()

// CREATE - Add a new student (POST /students)
app.post("/students",CreateStudent);
 

// READ ALL - Get all students (GET /students)
app.get("/students",getAllStudent);