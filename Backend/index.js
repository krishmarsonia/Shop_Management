const express = require('express');
require('./Database/mongoose')
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// ? Routes for API
const serviceRouteAPI = require('./Routes/ApiService')
const clientRouteAPI = require('./Routes/ApiClient')


const serviceModel = require('./model/service_model');
const clientModel = require('./model/client_model');

const path = require('path');

const serviceRoutes = require('./Routes/service');
const authRoutes = require('./Routes/auth');
const port = process.env.PORT || 7000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '../Client/views'));

app.use(express.json())
// ! 
// app.use(express.static(__dirname + "/views"));

app.use(serviceRoutes);
app.use(authRoutes);
// app.use(serviceRouteAPI)
app.use(clientRouteAPI)

app.use((req, res, next) => {
    res.render('error', {PageTitle: 'Page not found'});
})
app.listen(port, () => {
    console.log(`Server rocking at: ${port}`)
})