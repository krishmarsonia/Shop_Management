const express = require('express');
const port = process.env.PORT || 7000;
const app = express();

app.get('/', (req,res,next)=> {
    res.send('Hello world');
})
app.listen(7000, () => {
    console.log("Server rocking!!");
})