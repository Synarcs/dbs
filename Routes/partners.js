const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/2018-19/partners',(req,res)=>{
    res.render('pages/partners/2018-19/partners');
})

router.get('/2019-20/partners',(req,res)=>{
    res.render('pages/partners/2019-20/partners');
})





module.exports = router;
