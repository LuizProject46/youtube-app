const express = require("express")
const YoutubeController = require("../controllers/YoutubeController")
const route = express.Router()


route.get('/hello-world', (req, res) => {

    return res.status(200).send({
        message: "Hello"
    })

})


//YOUTUBE DOWNLOAD ROUTE
route.post('/download', YoutubeController.download)


module.exports = route