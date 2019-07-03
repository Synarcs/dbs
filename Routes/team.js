const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/2018-19/team',(req,res)=>{
    res.render('pages/team/2018-19/team')
})

router.get('/2019-20/team',(req,res)=>{
    res.render('pages/team/2019-20/team')
})

module.exports = router;