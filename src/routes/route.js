let {createShortUrl,getUrl}=require("../controllers/urlController")
const express = require('express');
let router=express.Router()

router.post("/url/shorten",createShortUrl)
router.get("/:urlCode",getUrl)



module.exports=router