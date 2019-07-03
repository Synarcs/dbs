const mongoose = require('mongoose');
const express = require('express');
const validator = require('validator');

const user_schema  = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error();
            }
        },
        number:{
            type:Number,
            required:false,
            validate(value){
                if(!validator.isNumeric(value)){
                    throw new Error();
                }
            }
        }
    }

})

const user = mongoose.model('users_contact',user_schema);

module.exports = user;
