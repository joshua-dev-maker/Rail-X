const express = require('express');
const mongoose = require('mongoose');
const  TransporterRouter = require('./src/routes/transportation.route')
require("dotenv").config();


const app = express();
const PORT = 1907

app.use(express.json());

const connectDB = async ()=> {
    try {
        await mongoose.connect(
            process.env.DATABASE_URI,
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    }
                )
        console.log("Bingo!!");
    } catch (error) {
        console.log(error)
        console.log('oops no data')
    }
}

connectDB();


app.use("/api/v1", TransporterRouter);

app.listen (PORT, ()=> {
   console.log(`Listening on port ${PORT}`);
})
