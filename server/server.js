const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 6000;


// create a database connection
mongoose.connect('mongodb+srv://deepthipurijala:mNEvDBTn57geZWCc@cluster0.m83eq.mongodb.net/')
.then(() => console.log('Mongo DB got connected'))
.catch((err) => console.log('error connecting Mongo DB', err))

// configuring cors
app.use(
    cors({
        origin:'http://localhost:5173/',
        methods: ["GET", "PUT", "POST", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
);

// configure cookie parser
app.use(cookieParser())
app.use(express.json)

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})