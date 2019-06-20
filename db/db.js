const mongoose = require('mongoose');
const validator = require('validator');
const is_valid_date = require('is-valid-date');

const url = "mongodb+srv://vedang.parasnis921%40gmail.com:5@cluster0-4exno.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url,{useCreateIndex:false,useNewUrlParser:true});

const schem = new mongoose.Schema({
    time_required:{
        type:Number,
        required:false,
        default:0,
    },
    creator:{
        type:String,
        required:true,
        validate(value){
            if(!value.length>3){
                throw new Error();
            }
        }
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

