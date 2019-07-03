const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db/config');

// models 
const articles = require('./db/article');
const users = require('./db/user');

// config db 
mongoose.connect(config.mongoURI,{useNewUrlParser:true,useCreateIndex:true}).then(data=>{console.log('connected to mongo atlas')}).catch(err=>console.log(err));

const app = express();

// use it as middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// express router
app.use('/articles',require('./Routes/article_route'));
app.use('/pages/partners',require('./Routes/partners'));
app.use('/pages/team',require('./Routes/team'));
app.use('/pages/events',require('./Routes/events'))

// css style stuff
app.use(express.static(path.join(__dirname,'./Public')));

app.use(express.static(path.join(__dirname,'./Public/_images')));

// dynamic templates
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'./Templates/views'));
hbs.registerPartials(path.join(__dirname,'./Templates/partials'));


app.get('/',async (req,res)=>{
    const body = req.body;
     res.render('index');
})

// post to home
app.post('/', async (req,res)=>{
    try{
        const body = req.body;
        if(!body){
            const art = new articles(body);
            await art.save();  
            res.json(value);
        }else{
            throw new Error();
        }
    }catch(e){
        res.json(e);
    }   
})

app.get('/campus-company',async (req,res)=>{ 
    res.render('campus-company');
})

app.get('/aboutus',async (req,res)=>{ 
    res.render('aboutus');
})


app.get('/*',async (req,res)=>{ 
    res.send('file not found no this server');
})

const Port = process.env.Port || 3000;
app.listen(Port,()=>{
   console.log('server started');
})




