const express = require("express")
const connectDB = require("./config/db")
const cors = require("cors")
const hsptlmmt = require("./routes/api/hsptlmmt")

const app = express()

connectDB().then(() => {
    console.log("Connected to mongodb")
})

// Calling CORS
app.use(cors({
    origin:true,
    credentials: true
}))

// Init Middleware
app.use(express.json({
    extended: false
}))

// Handling Routes
app.get('/', (req, res) => res.send('Hello world!'));
app.use("/api/hsptlmmt", hsptlmmt)

require("dotenv").config( { path: "./config.env" } )
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));