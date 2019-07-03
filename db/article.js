const mongoose = require('mongoose');
const validator = require('validator');

const is_valid_date = require('is-valid-date');
const schem = new mongoose.Schema({
    time_required:{
        type:Number,
        required:false,
        default:0,
    },
    creator:{
        type:String,
        required:true,
    },
    des:{
        type:String,
        required:true,
        minlength:7,
        maxlength:250
    }
})

const article = mongoose.model('articles',schem);

module.exports = article;

