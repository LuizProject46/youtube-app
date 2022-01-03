const Youtube = require('../models/Youtube')

module.exports = {
    async download(req, res){
        let { url, format } = req.body

        //format = format == 'mp4' ? '' : format

        try{
            let youtube = new Youtube(url, format)
            
            let response = await youtube.download()

            return res.send(response)
            

        }catch(err){
            return res.status(500).send({ message: err.message })
        }
    }
}