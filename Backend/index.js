const express = require('express');

const path = require('path');

const serviceRoutes = require('./Routes/service');
const port = process.env.PORT || 7000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '../Client/views'));

app.use(express.static(__dirname + "/views"));

app.use(serviceRoutes);

app.use((req, res, next) => {
    res.render('error', {PageTitle: 'Page not found'});
})

app.listen(port, () => {
    console.log("Server rocking!!");
})