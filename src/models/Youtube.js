const youtubedl = require("ytdl-core")
const fs = require('fs')
const path = require("path")



module.exports = class Youtube {
    
    constructor(url, format){
        this.url = url
        this.format = format
       
        
    }

    async download(){

        const info = await youtubedl.getBasicInfo(this.url)

        const title = `${info.videoDetails.title} - ${new Date().getTime().toString()}`

        
        const filePath = path.join(__dirname,'..', '/downloads')
        
        youtubedl(this.url, { filter: this.format == 'mp3' ? 'audioonly' : ''})
        .pipe(fs.createWriteStream(`${filePath}/${title}.${this.format}`))


        return {
            url: `${filePath}/${title}.${this.format}`
        }
    

        

    }
}
