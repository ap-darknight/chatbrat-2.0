const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    // console.log(res)
    // res.header('Access-Control-Allow-Origin','*');
    res.send("Reached!");
    // res.send('<h1>Hello</h1>');
    // console.log(res.header()._headers)
    
})

module.exports = router;