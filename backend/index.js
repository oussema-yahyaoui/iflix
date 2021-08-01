const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');


dotenv.config();


mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() =>
        console.log("mongoose is connected"))
    .catch(err => console.error(err));

app.use(express.json());

app.use("/backend/auth", authRouter)

app.listen(3000, () => {
    console.log("server is running on port 3000");
})