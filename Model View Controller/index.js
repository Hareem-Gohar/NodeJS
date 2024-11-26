const express = require("express");
const userRouter = require('./Routes/user');

const app = express();
const port = 8000;

app.use('/users', userRouter);


app.listen(port, ()=> console.log(`Server Started at Port: ${port}.`));