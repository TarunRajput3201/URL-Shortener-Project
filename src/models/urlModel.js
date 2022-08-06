let mongoose = require("mongoose")
let urlSchema = new mongoose.Schema({
   
    longUrl: {type:String,required:true}, 
    shortUrl: {type:String,required:true, unique:true},
    urlCode: {type:String, required:true, unique:true, lowercase:true, trim:true }
}  )
module.exports = mongoose.model('Url', urlSchema)