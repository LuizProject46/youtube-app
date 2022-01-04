const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require("./routes/routes")
const path = require('path')
const port = process.env.PORT || 3333
const app = express()



app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(routes)

app.use('/downloads', express.static(path.join(__dirname, 'downloads')))

app.listen(port, () => {
    console.log("Server is running...")
} )