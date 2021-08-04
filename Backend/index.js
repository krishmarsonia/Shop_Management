const express = require('express');
require('./Database/mongoose')
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
// ? Routes for API
const serviceRouteAPI = require('./Routes/ApiService')
const clientRouteAPI = require('./Routes/ApiClient')
const barberRouteAPI = require('./Routes/ApiBarber')
const appointmentAPI = require('./Routes/ApiAppointment')

const path = require('path');

const serviceRoutes = require('./Routes/service');
const authRoutes = require('./Routes/auth');
const port = process.env.PORT || 7000;
const app = express();
const store = new MongoDBStore({
    uri: 'mongodb+srv://Krish_Marsonia:krish2000@cluster0.ecnqg.mongodb.net/myFirstDatabase',
    collection: 'sessions'
})

app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '../Client/views'));

app.use(express.json())
// ! 
app.use(express.static(__dirname + "/views"));

app.use(session({secret: 'barber', resave: false, saveUninitialized: false, store: store}))

app.use(serviceRoutes);
app.use(authRoutes);
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

//page for showing appointments