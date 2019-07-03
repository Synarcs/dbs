const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db/article');


router.get('/2015',async (req,res)=>{
    res.send('the 2015 article page');
})

router.get('/2018',async (req,res)=>{
    try{
        const value = new db({
            creator:123456,
            des:'best part of the article is present'
        });
        res.json(value);
        await value.save();
    }catch(e){
        res.json(e);
    }
})

// protected route
router.get('/articles_api', async (req,res)=>{
   try{
    
    const body = await db.find({});
    res.json(body);
   }catch(e){
       res.json(e);
   }
})

router.get('*',(req,res)=>{
    res.send('under development phase');
});


module.exports = router;

