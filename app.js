const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/articles',require('./Routes/article_route'));
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

app.get('/campus-company',async (req,res)=>{ 
    res.render('campus-company');
})

app.get('/aboutus',async (req,res)=>{ 
    res.render('aboutus');
})

app.post('/',async (req,res)=>{
    const {name,email,contac,message} = req.body;
})

app.get('/pages/partners/2018-19/partners',(req,res)=>{
    res.render('pages/partners/2018-19/partners');
})

app.get('/pages/partners/2019-20/partners',(req,res)=>{
    res.render('pages/partners/2019-20/partners');
})

app.get('/pages/team/2018-19/team',(req,res)=>{
    res.render('pages/team/2018-19/team')
})

app.get('/pages/team/2019-20/team',(req,res)=>{
    res.render('pages/team/2019-20/team')
})

app.get('/pages/events/2019-20/events',(req,res)=>{
    res.render('pages/events/2019-20/events')
})

app.get('/pages/events/2018-19/events',(req,res)=>{
    res.render('pages/events/2018-19/events')
})

app.get('/*',async (req,res)=>{ 
    res.send('file not found no this server');
})



const Port = process.env.Port || 3000;
app.listen(Port,()=>{
   console.log('server started');
})



console.log(process.env);

