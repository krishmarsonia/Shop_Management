const express = require('express');

const serviceRoutes = require('./Routes/service');
const port = process.env.PORT || 7000;
const app = express();

app.use(serviceRoutes);

app.listen(port, () => {
    console.log("Server rocking!!");
})