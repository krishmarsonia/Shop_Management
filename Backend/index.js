const express = require('express');
require('./Database/mongoose')
const mongoose = require('mongoose');

// ? Routes for API
const serviceRouteAPI = require('./Routes/ApiService')
const clientRouteAPI = require('./Routes/ApiClient')
const barberRouteAPI = require('./Routes/ApiBarber')
const appointmentAPI = require('./Routes/ApiAppointment')

const path = require('path');

const serviceRoutes = require('./Routes/service');
const port = process.env.PORT || 7000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '../Client/views'));

app.use(express.json())
// ! 
// app.use(express.static(__dirname + "/views"));

app.use(serviceRoutes);
app.use(serviceRouteAPI)
app.use(clientRouteAPI)
app.use(barberRouteAPI)
app.use(appointmentAPI)

app.use((req, res, next) => {
    res.render('error', {PageTitle: 'Page not found'});
})

app.listen(port, () => {
    console.log(`Server rocking at: ${port}`)
})