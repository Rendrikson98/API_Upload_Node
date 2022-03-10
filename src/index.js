require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');


const app = express();

mongoose.connect("mongodb://localhost:27017/upload",
    {
        useNewUrlParser: true
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan())

app.use(routes);

app.listen(3000);