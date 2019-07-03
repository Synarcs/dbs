const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/2019-20/events',(req,res)=>{
    res.render('pages/events/2019-20/events')
})

router.get('/2018-19/events',(req,res)=>{
    res.render('pages/events/2018-19/events')
})


module.exports = router;