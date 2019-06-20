const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db/db');


router.get('/2015',async (req,res)=>{
    res.send('the 2015 article page');
})

router.get('/2016',async (req,res)=>{
    res.send('the 2016 article page');
})

router.get('/2017',async (req,res)=>{
    res.send('the 2017 article page');
})

router.get('/2018',async (req,res)=>{
    try{
        const value = new db({
            creator:123456,
            des:'sdsdsdasdasdsadsadasdas'
        });
        res.json(value);
        await value.save();
    }catch(e){
        res.json(e);
    }
})

// protected route
router.get('/articles_api', async (req,res)=>{
   const data ={
       name:'sasa',
       des:'sdsdfdsnfkndskfnkdsnfkds',
   }
   res.json(data);
})

router.get('*',(req,res)=>{
    res.send('under development phase');
});


module.exports = router;

